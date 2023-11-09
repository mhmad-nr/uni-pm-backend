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
exports.ContactInfoService = void 0;
const common_1 = require("@nestjs/common");
const contact_info_repository_1 = require("./contact-info.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ContactInfoService = class ContactInfoService {
    constructor(contactInfoRepository) {
        this.contactInfoRepository = contactInfoRepository;
    }
    async getInfo(user) {
        return this.contactInfoRepository.getInfo(user);
    }
    async addContactInfo(contactInfoCredentials, user) {
        return this.contactInfoRepository.addInfo(contactInfoCredentials, user);
    }
    async editeAddress(editeAddressCredentialsDto, user) {
        return this.contactInfoRepository.editeAddress(editeAddressCredentialsDto, user);
    }
};
exports.ContactInfoService = ContactInfoService;
exports.ContactInfoService = ContactInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_info_repository_1.ContactInfoRepository)),
    __metadata("design:paramtypes", [contact_info_repository_1.ContactInfoRepository])
], ContactInfoService);
//# sourceMappingURL=contact-info.service.js.map