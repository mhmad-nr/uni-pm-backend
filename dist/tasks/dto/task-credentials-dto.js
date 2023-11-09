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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDto = void 0;
const class_transformer_1 = require("class-transformer");
const status_enum_1 = require("../../common/status.enum");
const swagger_1 = require("@nestjs/swagger");
class TaskDto {
}
exports.TaskDto = TaskDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof status_enum_1.TaskStatus !== "undefined" && status_enum_1.TaskStatus) === "function" ? _a : Object)
], TaskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TaskDto.prototype, "project_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TaskDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TaskDto.prototype, "endDate", void 0);
//# sourceMappingURL=task-credentials-dto.js.map