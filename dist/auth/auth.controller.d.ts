import { AuthService } from './auth.service';
import { SignUpCredentialsDto, SignInCredentialsDto } from './dto';
import { JwtResponesDto } from './dto/jwt-respones-dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(authCredentials: SignUpCredentialsDto): Promise<any>;
    signin(authCredentials: SignInCredentialsDto): Promise<JwtResponesDto>;
}
