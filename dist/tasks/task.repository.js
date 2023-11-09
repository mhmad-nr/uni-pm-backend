"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const task_credentials_dto_1 = require("./dto/task-credentials.dto");
const common_2 = require("../common");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    async getTasks(queryDto, user) {
        const { search, status, projectId } = queryDto;
        const sqlQuery = `SELECT * FROM task WHERE task."userId" = '${user.id}' 
        ${projectId ? `AND task.projectId = '${projectId}'` : ""}
        ${(status || search) ? "AND" : ""}
        ${status ? `status = '${status}'` : ""} ${(status && search) ? "AND" : ""}
        ${search ? `(title LIKE '%${search}%' OR description LIKE '%${search}%')` : ""}; `;
        const tasks = (await this.query(sqlQuery));
        const newTasks = tasks.map((task) => (0, common_2.serializeDto)(task_credentials_dto_1.TaskDto, task));
        return newTasks;
    }
    async getTaskById(id, user) {
        const sqlQuery = `SELECT * FROM task WHERE task."userId" = '${user.id}' AND task.id = '${id}'`;
        const task = (await this.query(sqlQuery));
        return (0, common_2.serializeDto)(task_credentials_dto_1.TaskDto, task);
    }
    async deleteTask(id, user) {
        const sqlQuery = `DELETE FROM task WHERE task."userId" = '${user.id}' AND task.id = '${id}'`;
        try {
            const res = (await this.query(sqlQuery));
            return res;
        }
        catch (error) {
        }
    }
    async isTaskExist(id, user) {
        const sqlQuery = `SELECT EXISTS(SELECT 1 FROM task WHERE task."userId" = '${user.id}' AND task.id = '${id}')`;
        const [res] = (await this.query(sqlQuery));
        if (!res.exists) {
            throw new common_1.NotFoundException(`the task does not exist`);
        }
    }
    async createTask(createTaskDto, userId) {
        const { title, description, projectId, endedAt } = createTaskDto;
        const sqlQuery = `INSERT INTO "task"("id", "title", "description", "status", "createdAt", "endDate", "userId", "projectId") 
        VALUES (DEFAULT, '${title}', '${description}', '${common_2.StatusEnum.OPEN}', DEFAULT, ${endedAt ? `'${endedAt}',` : "DEFAULT,"} 
        '${userId}', 
        '${projectId}') 
        RETURNING "id", "createdAt"`;
        try {
            const res = await this.query(sqlQuery);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateTaskStatus(id, status) {
        console.log(status);
        const sqlQuery = `UPDATE task SET status = '${status}' WHERE  id = '${id}';`;
        try {
            const res = await this.query(sqlQuery);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.TaskRepository = TaskRepository;
exports.TaskRepository = TaskRepository = __decorate([
    (0, typeorm_1.EntityRepository)(task_entity_1.Task)
], TaskRepository);
//# sourceMappingURL=task.repository.js.map