"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(authCredentials) {
        const { password, email, isManager } = authCredentials;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const sqlQuery = `INSERT INTO "user"("id", "email", "password", "is_manager") VALUES (DEFAULT, '${email}', '${hashedPassword}', ${isManager}) RETURNING "id"`;
        try {
            await this.query(sqlQuery);
        }
        catch (err) {
            if (err.code === '23505') {
                throw new common_1.ConflictException("This email is already exists");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async findUser(email) {
        await this.isUserExist(email);
        const sqlQuery = `SELECT * FROM public."user" WHERE email = '${email}';`;
        try {
            const [res] = await this.query(sqlQuery);
            return res;
        }
        catch (err) {
            if (err.code === '23505') {
                throw new common_1.ConflictException("This email is already exists");
            }
            else if (err.status == "404") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `the project with email = ${email} does not exist`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: err
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async isUserExist(email) {
        const sqlQuery = `SELECT EXISTS (SELECT * FROM public."user" WHERE email = '${email}');`;
        try {
            const [res] = (await this.query(sqlQuery));
            if (!res.exists) {
                throw new common_1.NotFoundException();
            }
        }
        catch (error) {
            if (error.code == "22P02") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_ACCEPTABLE,
                    error: 'the email is not valid',
                }, common_1.HttpStatus.NOT_ACCEPTABLE, {
                    cause: error
                });
            }
            else if (error.status == "404") {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.NOT_FOUND,
                    error: `the user with email = ${email} does not exist`,
                }, common_1.HttpStatus.NOT_FOUND, {
                    cause: error
                });
            }
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(entity_1.User)
], UserRepository);
//# sourceMappingURL=user.repository.js.map