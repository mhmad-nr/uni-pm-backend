import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/query-task.dto';
import { TaskRepository } from './task.repository';
import { AuthService } from 'src/auth/auth.service';
import { ProjectsService } from 'src/projects/projects.service';
import { User } from 'src/auth/entity';
import { TaskDto } from './dto/task-credentials.dto';
import { StatusEnum } from 'src/common';
export declare class TasksService {
    private taskRepository;
    private authService;
    private projectsService;
    constructor(taskRepository: TaskRepository, authService: AuthService, projectsService: ProjectsService);
    getTasks(getTasksFilterDto: GetTasksFilterDto, user: User): Promise<TaskDto[]>;
    getTaskId(id: string, user: User): Promise<TaskDto>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<void>;
    deleteTask(id: string, user: User): Promise<void>;
    updateTaskStatus(id: string, status: StatusEnum, user: User): Promise<void>;
}
