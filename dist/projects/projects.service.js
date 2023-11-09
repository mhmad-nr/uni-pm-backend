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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const project_entity_1 = require("./project.entity");
const projects_repository_1 = require("./projects.repository");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
let ProjectsService = class ProjectsService {
    constructor(projectRepository, authService) {
        this.projectRepository = projectRepository;
        this.authService = authService;
    }
    async getProjects(queryDto, user) {
        return this.projectRepository.getProjects(queryDto, user);
    }
    async getUsers(idSCredentialsDto) {
        await this.projectRepository.isProjectExist(idSCredentialsDto);
        return this.projectRepository.getUsers(idSCredentialsDto);
    }
    async getProjectById(idSCredentialsDto) {
        return await this.projectRepository.getProjectById(idSCredentialsDto);
    }
    async createProject(createProjectDto, user) {
        await this.projectRepository.createProject(createProjectDto, user);
    }
    async deleteProject(idSCredentialsDto) {
        await this.projectRepository.isProjectExist(idSCredentialsDto);
        return this.projectRepository.deleteProject(idSCredentialsDto);
    }
    async updateProject(idSCredentialsDto, updateProjectDto) {
        await this.projectRepository.isProjectExist(idSCredentialsDto);
        return this.projectRepository.updateProject(idSCredentialsDto, updateProjectDto);
    }
    async addUser(idSCredentialsDto, userProjectDto) {
        const { email } = userProjectDto;
        await this.projectRepository.isProjectExist(idSCredentialsDto);
        const newUser = await this.projectIDont(idSCredentialsDto, email);
        return this.projectRepository.addUser(idSCredentialsDto, newUser);
    }
    async deleteUser(idSCredentialsDto, email) {
        const user = await this.projectIDont(idSCredentialsDto, email);
        const isUserExistInProject = await this.projectRepository.isUserExistInProject(idSCredentialsDto, user.id);
        if (!isUserExistInProject) {
            throw new common_1.NotFoundException("The user does not exist in the project");
        }
        return this.projectRepository.deleteUser(idSCredentialsDto, user.id);
    }
    async projectIDont(idSCredentialsDto, email) {
        await this.projectRepository.isProjectExist(idSCredentialsDto);
        return this.authService.findUserByEmail(email);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [projects_repository_1.ProjectRepository,
        auth_service_1.AuthService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map