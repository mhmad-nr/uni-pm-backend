import { Project } from "src/projects/project.entity";
import { User } from "src/auth/entity";
import { StatusEnum } from "src/common";
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: StatusEnum;
    createdAt: Date;
    endDate: Date | null;
    user: User;
    project: Project;
}
