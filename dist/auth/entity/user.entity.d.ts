import { Project } from "src/projects/project.entity";
import { Task } from "src/tasks/task.entity";
import { ContactInfo } from "../../contact-info/contactInfo.entity";
export declare class User {
    id: string;
    email: string;
    password: string;
    isManager: boolean;
    tasks: Task[];
    projects: Project[];
    contactInfo: ContactInfo;
}
