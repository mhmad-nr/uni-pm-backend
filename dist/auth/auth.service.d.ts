import { UserRepository } from './repository';
import { SignUpCredentialsDto, SignInCredentialsDto } from './dto';
import { JwtService } from "@nestjs/jwt";
import { User } from './entity';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signup(authCredentials: SignUpCredentialsDto): Promise<any>;
    signin(authCredentials: SignInCredentialsDto): Promise<{
        accessToken: string;
    }>;
    findUserByEmail(email: string): Promise<User>;
}
