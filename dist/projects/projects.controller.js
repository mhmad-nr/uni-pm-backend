"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const entity_1 = require("../auth/entity");
const decorator_1 = require("../auth/decorator");
const guard_2 = require("../auth/guard");
const project_credentials_dto_1 = require("./dto/project-credentials-dto");
const user_credentials_dto_1 = require("../auth/dto/user-credentials-dto");
const swagger_1 = require("@nestjs/swagger");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async getProjects(query, user) {
        return await this.projectsService.getProjects(query, user);
    }
    async getProjectsById(projectId, user) {
        return await this.projectsService.getProjectById({ projectId, userId: user.id });
    }
    async getUsersProject(projectId, manager) {
        return await this.projectsService.getUsers({ projectId, userId: manager.id });
    }
    async createProject(createProjectDto, manager) {
        await this.projectsService.createProject(createProjectDto, manager);
    }
    async updateProject(projectId, manager, updateProjectDto) {
        await this.projectsService.updateProject({ projectId, userId: manager.id }, updateProjectDto);
    }
    async addUserToProject(projectId, manager, userProjectDto) {
        await this.projectsService.addUser({ projectId, userId: manager.id }, userProjectDto);
    }
    async deleteProject(projectId, manager) {
        await this.projectsService.deleteProject({ projectId, userId: manager.id });
    }
    async deleteUserToProject(projectId, manager, user) {
        await this.projectsService.deleteUser({ projectId, userId: manager.id }, user.email);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: [project_credentials_dto_1.ProjectDto]
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetProjectFilterDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjects", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: project_credentials_dto_1.ProjectDto
    }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectsById", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: [user_credentials_dto_1.UserDto]
    }),
    (0, common_1.Get)('users/:id'),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getUsersProject", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProjectDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Patch)("update/:id"),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User, dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateProject", null);
__decorate([
    (0, common_1.Patch)("add-user/:id"),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User, dto_1.UserProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "addUserToProject", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteProject", null);
__decorate([
    (0, common_1.Delete)("delete-user/:id"),
    (0, common_1.UseGuards)(guard_2.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User, dto_1.UserProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteUserToProject", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)("Project"),
    (0, common_1.Controller)('project'),
    (0, common_1.UseGuards)(guard_1.AccessTokenGuard),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map