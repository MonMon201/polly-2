"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
const showMessage_1 = require("../Utils/showMessage");
const viewSaves = async (message) => {
    const savesRoute = `${__dirname}/../../saves`;
    if (!fs_1.existsSync(savesRoute))
        return;
    const saves = node_fs_1.readdirSync(savesRoute).filter((file) => {
        const ext = node_path_1.default.extname(file).toLowerCase();
        return (ext === '.json');
    });
    console.log(`parsed saves: ${saves}`);
    await Promise.all(saves.map(async (save) => await showMessage_1.showMessage(message, save)));
};
const command = {
    name: 'viewSaves',
    description: 'Shows saved polls',
    example: '!viewSaves',
    execute: viewSaves,
};
module.exports = command;
//# sourceMappingURL=viewSaves.js.map