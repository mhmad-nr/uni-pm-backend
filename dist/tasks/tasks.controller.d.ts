import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/query-task.dto';
import { User } from 'src/auth/entity';
import { TaskDto } from './dto/task-credentials.dto';
import { StatusEnum } from 'src/common';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskId(id: string, user: User): Promise<TaskDto>;
    getTasks(getTasksFilterDto: GetTasksFilterDto, user: User): Promise<TaskDto[]>;
    createTask(createTaskDto: CreateTaskDto, manager: User): Promise<void>;
    updateStatusTask(id: string, status: StatusEnum, user: User): Promise<void>;
    deleteTask(id: string, manager: User): Promise<void>;
}
