"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCommands_1 = require("../Utils/getCommands");
const help = async (message) => {
    const commands = await getCommands_1.getCommands();
    const helpMessage = commands
        .map((command) => {
        return `\n\nCommand name: ${command.name},\nCommand description: ${command.description},\nCommand usage example: ${command.example}`;
    })
        .reduce((acc, msg) => (acc += msg));
    message.channel.send(helpMessage);
};
const command = {
    name: 'help',
    description: 'See examples and descriptions for commands',
    execute: help,
    example: '!help',
};
module.exports = command;
//# sourceMappingURL=help.js.map