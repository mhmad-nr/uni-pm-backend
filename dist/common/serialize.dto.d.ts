import { ClassConstructor } from "class-transformer";
export declare function serializeDto<T, V>(dto: ClassConstructor<T>, data: V): T;
