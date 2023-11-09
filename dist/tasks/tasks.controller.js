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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const query_task_dto_1 = require("./dto/query-task.dto");
const decorator_1 = require("../auth/decorator");
const entity_1 = require("../auth/entity");
const guard_1 = require("../auth/guard");
const task_credentials_dto_1 = require("./dto/task-credentials.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../common");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async getTaskId(id, user) {
        return await this.tasksService.getTaskId(id, user);
    }
    async getTasks(getTasksFilterDto, user) {
        return await this.tasksService.getTasks(getTasksFilterDto, user);
    }
    async createTask(createTaskDto, manager) {
        return await this.tasksService.createTask(createTaskDto, manager);
    }
    async updateStatusTask(id, status, user) {
        return await this.tasksService.updateTaskStatus(id, status, user);
    }
    async deleteTask(id, manager) {
        return await this.tasksService.deleteTask(id, manager);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiOkResponse)({
        type: task_credentials_dto_1.TaskDto
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTaskId", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: [task_credentials_dto_1.TaskDto]
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_task_dto_1.GetTasksFilterDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, common_1.UseGuards)(guard_1.OnlyManagerGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Patch)("update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)("status")),
    __param(2, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateStatusTask", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    (0, common_1.UseGuards)(guard_1.OnlyManagerGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTask", null);
exports.TasksController = TasksController = __decorate([
    (0, swagger_1.ApiTags)("Task"),
    (0, common_1.Controller)('task'),
    (0, common_1.UseGuards)(guard_1.AccessTokenGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map