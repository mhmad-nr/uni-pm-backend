import { Task } from "src/tasks/task.entity";
import { User } from "src/auth/entity";
import { StatusEnum } from "src/common";
export declare class Project {
    id: string;
    title: string;
    description: string;
    status: StatusEnum;
    users: User[];
    tasks: Task[];
}
