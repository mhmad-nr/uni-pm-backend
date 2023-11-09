import { ProjectRepository } from './projects.repository';
import { UserProjectDto, CreateProjectDto, GetProjectFilterDto, IdSCredentialsDto, UpdateProjectDto } from './dto';
import { User } from 'src/auth/entity';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from 'src/auth/dto/user-credentials-dto';
import { ProjectDto } from './dto/project-credentials-dto';
export declare class ProjectsService {
    private projectRepository;
    private authService;
    constructor(projectRepository: ProjectRepository, authService: AuthService);
    getProjects(queryDto: GetProjectFilterDto, user: User): Promise<ProjectDto[]>;
    getUsers(idSCredentialsDto: IdSCredentialsDto): Promise<UserDto[]>;
    getProjectById(idSCredentialsDto: IdSCredentialsDto): Promise<ProjectDto>;
    createProject(createProjectDto: CreateProjectDto, user: User): Promise<void>;
    deleteProject(idSCredentialsDto: IdSCredentialsDto): Promise<void>;
    updateProject(idSCredentialsDto: IdSCredentialsDto, updateProjectDto: UpdateProjectDto): Promise<void>;
    addUser(idSCredentialsDto: IdSCredentialsDto, userProjectDto: UserProjectDto): Promise<void>;
    deleteUser(idSCredentialsDto: IdSCredentialsDto, email: string): Promise<void>;
    projectIDont(idSCredentialsDto: IdSCredentialsDto, email: string): Promise<User>;
}
