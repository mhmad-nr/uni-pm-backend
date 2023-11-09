import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class OnlyManagerGuard implements CanActivate {
    canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
