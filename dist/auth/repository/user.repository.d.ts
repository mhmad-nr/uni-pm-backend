import { Repository } from "typeorm";
import { User } from "../entity";
import { SignUpCredentialsDto } from '../dto';
export declare class UserRepository extends Repository<User> {
    createUser(authCredentials: SignUpCredentialsDto): Promise<void>;
    findUser(email: string): Promise<User>;
    isUserExist(email: string): Promise<void>;
}
