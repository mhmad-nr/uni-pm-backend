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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./task.entity");
const task_repository_1 = require("./task.repository");
const auth_service_1 = require("../auth/auth.service");
const projects_service_1 = require("../projects/projects.service");
let TasksService = class TasksService {
    constructor(taskRepository, authService, projectsService) {
        this.taskRepository = taskRepository;
        this.authService = authService;
        this.projectsService = projectsService;
    }
    async getTasks(getTasksFilterDto, user) {
        return this.taskRepository.getTasks(getTasksFilterDto, user);
    }
    async getTaskId(id, user) {
        await this.taskRepository.isTaskExist(id, user);
        return this.taskRepository.getTaskById(id, user);
    }
    async createTask(createTaskDto, user) {
        const { projectId, userEmail } = createTaskDto;
        const userm = await this.projectsService.projectIDont({ projectId, userId: user.id }, userEmail);
        return this.taskRepository.createTask(createTaskDto, userm.id);
    }
    async deleteTask(id, user) {
        await this.taskRepository.isTaskExist(id, user);
        await this.taskRepository.deleteTask(id, user);
    }
    async updateTaskStatus(id, status, user) {
        await this.taskRepository.isTaskExist(id, user);
        return await this.taskRepository.updateTaskStatus(id, status);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        auth_service_1.AuthService,
        projects_service_1.ProjectsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map