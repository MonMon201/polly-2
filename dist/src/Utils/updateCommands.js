"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommands = void 0;
const axios_1 = __importDefault(require("axios"));
const wait_1 = require("./wait");
const updateCommands = async (commands, url, token, responses = [], i = 0) => {
    if (i >= commands.length) {
        return responses;
    }
    const command = commands[i];
    const name = command.name;
    const description = `Description: ${command.description}, Example: ${command.example}`;
    const body = {
        name,
        description,
        options: command.options,
    };
    const response = await axios_1.default.post(url, body, {
        headers: { Authorization: `Bot ${token}` },
    });
    console.log(response);
    responses.push(response);
    i++;
    const timeout = await wait_1.wait(4000);
    console.log(timeout);
    return exports.updateCommands(commands, url, token, responses, i);
};
exports.updateCommands = updateCommands;
//# sourceMappingURL=updateCommands.js.map