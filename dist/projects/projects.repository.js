"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const project_entity_1 = require("./project.entity");
const user_credentials_dto_1 = require("../auth/dto/user-credentials-dto");
const common_2 = require("../common");
const project_credentials_dto_1 = require("./dto/project-credentials-dto");
let ProjectRepository = class ProjectRepository extends typeorm_1.Repository {
    async getProjects(queryDto, user) {
        const { id: userId } = user;
        const { status, search } = queryDto;
        const sqlQuery = `SELECT * FROM project
        INNER JOIN project_user ON project.id = project_user.project_id
        WHERE project_user.user_id = '${userId}'
        ${(status || search) ? "AND" : ""}
        ${status ? `status = '${status}'` : ""} ${(status && search) ? "AND" : ""}
        ${search ? `(title LIKE '%${search}%' OR description LIKE '%${search}%')` : ""} ;`;
        const projects = await this.query(sqlQuery);
        const newProjects = projects.map((project) => (0, common_2.serializeDto)(project_credentials_dto_1.ProjectDto, project));
        return newProjects;
    }
    async createProject(createTaskDto, user) {
        const { description, title } = createTaskDto;
        const { id } = user;
        try {
            const sqlQueryInsertProject = `INSERT INTO "project"("id", "title", "description", "status") VALUES (DEFAULT, '${title}' , '${description}', '${common_2.StatusEnum.OPEN}') RETURNING "id"`;
            const projectId = (await this.query(sqlQueryInsertProject))[0].id;
            const sqlQueryInsertProject_users_user = `INSERT INTO "project_user"("project_id", "user_id") VALUES ('${projectId}', '${user.id}')`;
            await this.query(sqlQueryInsertProject_users_user);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async deleteProject(idSCredentialsDto) {
        const { projectId, userId } = idSCredentialsDto;
        const sqlQuery = `DELETE FROM project
        WHERE project.id = '${projectId}'
        AND EXISTS (
          SELECT 1
          FROM project_user
          WHERE project_user.user_id = '${userId}' AND project_user.project_id = '${projectId}'
        );`;
        try {
            await this.query(sqlQuery);
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateProject(idSCredentialsDto, updateProjectDto) {
        const { title, status, description } = updateProjectDto;
        const { projectId } = idSCredentialsDto;
        const sqlQuery = `UPDATE project SET ${title ? `title = '${title}',` : ""}${description ? `description = '${description}',` : ""}${status ? `status = '${status}',` : ""}WHERE id = '${projectId}';`;
        const newSqlQuery = sqlQuery.replace(",WHERE", " WHERE");
        try {
            await this.query(newSqlQuery);
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async addUser(idSCredentialsDto, newUser) {
        const { id } = newUser;
        const { projectId } = idSCredentialsDto;
        const sqlQuery = `INSERT INTO project_user (project_id, user_id) VALUES ('${projectId}', '${id}');`;
        try {
            await this.query(sqlQuery);
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            else if (error.code == '23505') {
                throw new common_1.ConflictException("This user has already joined to the project");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async deleteUser(idSCredentialsDto, userDeleteId) {
        const { projectId } = idSCredentialsDto;
        const sqlQuery = `DELETE FROM project_user
        WHERE project_id = '${projectId}' AND user_id = '${userDeleteId}';`;
        try {
            await this.query(sqlQuery);
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            else if (error.code == '23505') {
                throw new common_1.ConflictException("This user has already joined to the project");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async getUsers(idSCredentialsDto) {
        const { projectId, userId } = idSCredentialsDto;
        const sqlQuery = `SELECT * FROM public."user"
        INNER JOIN project_user ON  "user".id = project_user.user_id
        WHERE project_user.project_id = '${projectId}';`;
        const allUsers = await this.query(sqlQuery);
        const users = allUsers.filter((user) => user.id != userId);
        const newUsers = users.map((user) => (0, common_2.serializeDto)(user_credentials_dto_1.UserDto, user));
        return newUsers;
    }
    async getProjectById(idSCredentialsDto) {
        const { userId, projectId } = idSCredentialsDto;
        const sqlQuery = `SELECT * FROM project
        INNER JOIN project_user ON project.id = project_user.project_id
        WHERE project_user.user_id = '${userId}' AND project.id = '${projectId}';`;
        try {
            const [project] = await this.query(sqlQuery);
            if (!project) {
                throw new common_1.NotFoundException(`the project with id = ${projectId} does not exist`);
            }
            const newProject = (0, common_2.serializeDto)(project_credentials_dto_1.ProjectDto, project);
            return newProject;
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async isProjectExist(idSCredentialsDto) {
        const { userId, projectId } = idSCredentialsDto;
        const sqlQuery = `SELECT EXISTS (
            SELECT 1
            FROM project
            INNER JOIN project_user ON project.id = project_user.project_id
            WHERE project_user.user_id = '${userId}' AND project.id = '${projectId}'
          );`;
        try {
            const [res] = (await this.query(sqlQuery));
            if (!res.exists) {
                throw new common_1.NotFoundException();
            }
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the projectId is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            else if (error.status == "404") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `the project with id = ${projectId} does not exist`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: error
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async isUserExistInProject(idSCredentialsDto, userDeleteId) {
        const { projectId } = idSCredentialsDto;
        const sqlQuery = `SELECT EXISTS (SELECT 1 FROM project_user WHERE project_id = '${projectId}' AND user_id = '${userDeleteId}');`;
        const [res] = (await this.query(sqlQuery));
        return res.exists;
    }
};
exports.ProjectRepository = ProjectRepository;
exports.ProjectRepository = ProjectRepository = __decorate([
    (0, typeorm_1.EntityRepository)(project_entity_1.Project)
], ProjectRepository);
//# sourceMappingURL=projects.repository.js.map