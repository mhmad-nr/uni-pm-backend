"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const repository_1 = require("./repository");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const contactInfo_entity_1 = require("../contact-info/contactInfo.entity");
const strategy_1 = require("./strategy");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contactInfo_entity_1.ContactInfo, repository_1.UserRepository]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: 'access-token',
                signOptions: {
                    expiresIn: "7d"
                }
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, strategy_1.JWTStrategy,],
        exports: [strategy_1.JWTStrategy, passport_1.PassportModule, auth_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map