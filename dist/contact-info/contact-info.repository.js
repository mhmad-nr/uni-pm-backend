"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactInfoRepository = void 0;
const typeorm_1 = require("typeorm");
const exceptions_1 = require("@nestjs/common/exceptions");
const contactInfo_entity_1 = require("./contactInfo.entity");
let ContactInfoRepository = class ContactInfoRepository extends typeorm_1.Repository {
    async getInfo(user) {
        const sqlQuery = `SELECT * FROM public.contact_info WHERE "userId" = '${user.id}';`;
        try {
            const [res] = await this.query(sqlQuery);
            return {
                phone: res.phone,
                address: res.address
            };
        }
        catch (err) {
            if (err.code === '23505') {
                throw new exceptions_1.ConflictException("This username is already exists");
            }
            else {
                throw new exceptions_1.InternalServerErrorException();
            }
        }
    }
    async editeAddress(editeAddressCredentialsDto, user) {
        const { address } = editeAddressCredentialsDto;
        const { phone } = await this.getInfo(user);
        const sqlQuery = `UPDATE contact_info SET address = '${address}' WHERE phone = '${phone}';`;
        try {
            const res = await this.query(sqlQuery);
            console.log(res);
        }
        catch (err) {
            throw new exceptions_1.InternalServerErrorException();
        }
    }
    async addInfo(contactInfoCredentialsDto, user) {
        const { address, phone } = contactInfoCredentialsDto;
        const sqlQuery = `INSERT INTO "contact_info"("id", "phone", "address", "userId") VALUES (DEFAULT, '${phone}', '${address}', '${user.id}') RETURNING "id"`;
        try {
            await this.query(sqlQuery);
        }
        catch (err) {
            if (err.code === '23505') {
                throw new exceptions_1.ConflictException("This username is already exists");
            }
            else {
                throw new exceptions_1.InternalServerErrorException();
            }
        }
    }
};
exports.ContactInfoRepository = ContactInfoRepository;
exports.ContactInfoRepository = ContactInfoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(contactInfo_entity_1.ContactInfo)
], ContactInfoRepository);
//# sourceMappingURL=contact-info.repository.js.map