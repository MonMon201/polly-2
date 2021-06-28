"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const getCommands = async () => {
    const route = `${__dirname}/../Commands`;
    const commandFiles = fs_1.readdirSync(route).filter((file) => {
        const ext = path_1.default.extname(file).toLowerCase();
        return (ext === '.js' || ext === '.ts');
    });
    console.log(commandFiles);
    return Promise.all(commandFiles.map(async (cmdFile) => (await Promise.resolve().then(() => __importStar(require(`${route}/${cmdFile}`))))));
};
exports.getCommands = getCommands;
//# sourceMappingURL=getCommands.js.map