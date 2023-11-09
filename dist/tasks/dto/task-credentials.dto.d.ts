import { StatusEnum } from "src/common";
export declare class TaskDto {
    id: string;
    title: string;
    description: string;
    status: StatusEnum;
    project_id: Date;
    createdAt: Date;
    endDate: Date;
}
