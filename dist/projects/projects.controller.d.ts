import { ProjectsService } from './projects.service';
import { UserProjectDto, CreateProjectDto, GetProjectFilterDto, UpdateProjectDto } from './dto';
import { User } from 'src/auth/entity';
import { ProjectDto } from './dto/project-credentials-dto';
import { UserDto } from 'src/auth/dto/user-credentials-dto';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(query: GetProjectFilterDto, user: User): Promise<ProjectDto[]>;
    getProjectsById(projectId: string, user: User): Promise<ProjectDto>;
    getUsersProject(projectId: string, manager: User): Promise<UserDto[]>;
    createProject(createProjectDto: CreateProjectDto, manager: User): Promise<void>;
    updateProject(projectId: string, manager: User, updateProjectDto: UpdateProjectDto): Promise<void>;
    addUserToProject(projectId: string, manager: User, userProjectDto: UserProjectDto): Promise<void>;
    deleteProject(projectId: string, manager: User): Promise<void>;
    deleteUserToProject(projectId: string, manager: User, user: UserProjectDto): Promise<void>;
}
