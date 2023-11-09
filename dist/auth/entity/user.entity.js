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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const project_entity_1 = require("../../projects/project.entity");
const task_entity_1 = require("../../tasks/task.entity");
const typeorm_1 = require("typeorm");
const contactInfo_entity_1 = require("../../contact-info/contactInfo.entity");
const class_transformer_1 = require("class-transformer");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_manager" }),
    __metadata("design:type", Boolean)
], User.prototype, "isManager", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToMany)((_type) => task_entity_1.Task, (task) => task.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToMany)((_type) => project_entity_1.Project),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToOne)(() => contactInfo_entity_1.ContactInfo, (contactInfo) => contactInfo.user, { nullable: true }),
    __metadata("design:type", contactInfo_entity_1.ContactInfo)
], User.prototype, "contactInfo", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: "user" })
], User);
//# sourceMappingURL=user.entity.js.map