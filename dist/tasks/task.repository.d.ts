import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/query-task.dto";
import { User } from "src/auth/entity";
import { TaskDto } from "./dto/task-credentials.dto";
import { StatusEnum } from "src/common";
export declare class TaskRepository extends Repository<Task> {
    getTasks(queryDto: GetTasksFilterDto, user: User): Promise<TaskDto[]>;
    getTaskById(id: string, user: User): Promise<TaskDto>;
    deleteTask(id: string, user: User): Promise<Task>;
    isTaskExist(id: string, user: User): Promise<void>;
    createTask(createTaskDto: CreateTaskDto, userId: string): Promise<void>;
    updateTaskStatus(id: string, status: StatusEnum): Promise<void>;
}
