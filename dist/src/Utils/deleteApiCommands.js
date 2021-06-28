"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApiCommands = void 0;
const axios_1 = __importDefault(require("axios"));
const wait_1 = require("./wait");
const deleteApiCommands = async (commandIds, responses, token, url, i = 0) => {
    if (i >= commandIds.length) {
        return responses;
    }
    const commandId = commandIds[i];
    const deleteUrl = `${url}/${commandId}`;
    const response = await axios_1.default.delete(deleteUrl, {
        headers: { Authorization: `Bot ${token}` },
    });
    console.log(response);
    responses.push(response);
    i++;
    const timeout = await wait_1.wait(4000);
    console.log(timeout);
    return exports.deleteApiCommands(commandIds, responses, token, url, i);
};
exports.deleteApiCommands = deleteApiCommands;
//# sourceMappingURL=deleteApiCommands.js.map