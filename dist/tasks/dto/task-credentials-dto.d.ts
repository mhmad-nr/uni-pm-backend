import { TaskStatus } from "../../common/status.enum";
export declare class TaskDto {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    project_id: Date;
    createdAt: Date;
    endDate: Date;
}
