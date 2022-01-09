"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_2 = require("fs");
const path_1 = __importDefault(require("path"));
const constants_1 = require("../constants");
const showMessage_1 = require("../Utils/showMessage");
const viewSaves = async (message) => {
    const savesRoute = `${__dirname}/../../saves`;
    if (!fs_1.existsSync(savesRoute))
        return;
    const saves = fs_2.readdirSync(savesRoute)
        .filter((filename) => {
        const ext = path_1.default.extname(filename).toLowerCase();
        return ext === '.json';
    })
        .map((filename) => filename.split('.')[0]);
    console.log(`parsed saves: ${saves}`);
    await Promise.all(saves.map(async (save) => await showMessage_1.showMessage(message, save)));
};
const command = {
    name: 'view_saves',
    description: 'Shows saved polls',
    example: `${constants_1.prefix}viewSaves`,
    execute: viewSaves,
};
module.exports = command;
//# sourceMappingURL=viewSaves.js.map