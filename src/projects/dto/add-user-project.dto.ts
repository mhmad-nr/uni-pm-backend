import { IsEmail } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UserProjectDto {

    @ApiProperty()
    @IsEmail()
    email: string;
}