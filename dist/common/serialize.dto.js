"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDto = void 0;
const class_transformer_1 = require("class-transformer");
function serializeDto(dto, data) {
    return (0, class_transformer_1.plainToClass)(dto, data, {
        excludeExtraneousValues: true,
        enableImplicitConversion: true
    });
}
exports.serializeDto = serializeDto;
//# sourceMappingURL=serialize.dto.js.map