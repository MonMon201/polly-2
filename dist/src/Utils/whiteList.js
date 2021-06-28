"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWhiteList = void 0;
const config_json_1 = __importDefault(require("../../config.json"));
const environment_1 = require("../Env/environment");
const checkWhiteList = (message) => {
    const { prod } = environment_1.getConfig();
    const whiteList = prod ? config_json_1.default.prodWhiteList : config_json_1.default.devWhiteList;
    return !!whiteList.find((el) => { var _a; return el === ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.id) || ''; });
};
exports.checkWhiteList = checkWhiteList;
//# sourceMappingURL=whiteList.js.map