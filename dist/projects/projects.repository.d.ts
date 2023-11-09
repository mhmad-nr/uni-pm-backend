import { Repository } from "typeorm";
import { Project } from "./project.entity";
import { CreateProjectDto, IdSCredentialsDto, UpdateProjectDto } from "./dto";
import { GetProjectFilterDto } from "./dto";
import { User } from "src/auth/entity";
import { UserDto } from "src/auth/dto/user-credentials-dto";
import { ProjectDto } from "./dto/project-credentials-dto";
export declare class ProjectRepository extends Repository<Project> {
    getProjects(queryDto: GetProjectFilterDto, user: User): Promise<ProjectDto[]>;
    createProject(createTaskDto: CreateProjectDto, user: User): Promise<void>;
    deleteProject(idSCredentialsDto: IdSCredentialsDto): Promise<void>;
    updateProject(idSCredentialsDto: IdSCredentialsDto, updateProjectDto: UpdateProjectDto): Promise<void>;
    addUser(idSCredentialsDto: IdSCredentialsDto, newUser: User): Promise<void>;
    deleteUser(idSCredentialsDto: IdSCredentialsDto, userDeleteId: string): Promise<void>;
    getUsers(idSCredentialsDto: IdSCredentialsDto): Promise<UserDto[]>;
    getProjectById(idSCredentialsDto: IdSCredentialsDto): Promise<ProjectDto>;
    isProjectExist(idSCredentialsDto: IdSCredentialsDto): Promise<void>;
    isUserExistInProject(idSCredentialsDto: IdSCredentialsDto, userDeleteId: string): Promise<boolean>;
}
