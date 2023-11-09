"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactInfoController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const contact_info_service_1 = require("./contact-info.service");
const get_user_decorator_1 = require("../auth/decorator/get-user.decorator");
const entity_1 = require("../auth/entity");
const guard_1 = require("../auth/guard");
const swagger_1 = require("@nestjs/swagger");
let ContactInfoController = class ContactInfoController {
    constructor(contactInfoService) {
        this.contactInfoService = contactInfoService;
    }
    async getInfo(user) {
        return await this.contactInfoService.getInfo(user);
    }
    async addContactInfo(contactInfoCredentialsDto, user) {
        return this.contactInfoService.addContactInfo(contactInfoCredentialsDto, user);
    }
    async editeAddress(editeAddressCredentialsDto, user) {
        return this.contactInfoService.editeAddress(editeAddressCredentialsDto, user);
    }
};
exports.ContactInfoController = ContactInfoController;
__decorate([
    (0, common_1.Get)("get-info"),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.ContactInfoCredentialsDto
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.User]),
    __metadata("design:returntype", Promise)
], ContactInfoController.prototype, "getInfo", null);
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ContactInfoCredentialsDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], ContactInfoController.prototype, "addContactInfo", null);
__decorate([
    (0, common_1.Post)("edite-address"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EditeAddressCredentialsDto, entity_1.User]),
    __metadata("design:returntype", Promise)
], ContactInfoController.prototype, "editeAddress", null);
exports.ContactInfoController = ContactInfoController = __decorate([
    (0, swagger_1.ApiTags)("Contact Info"),
    (0, common_1.Controller)('contact-info'),
    (0, common_1.UseGuards)(guard_1.AccessTokenGuard),
    __metadata("design:paramtypes", [contact_info_service_1.ContactInfoService])
], ContactInfoController);
//# sourceMappingURL=contact-info.controller.js.map