import { Strategy } from "passport-jwt";
import { UserRepository } from "../repository";
import { JwtPayload } from "../jwt-payload.interface";
import { User } from "../entity";
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
