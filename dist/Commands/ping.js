"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const status = async (message) => {
    message.channel.send(`Status: ${constants_1.botStatus.ONLINE}`);
};
const command = {
    name: 'healthcheck',
    description: 'Check if bot is up',
    example: '!healthcheck',
    execute: status,
};
module.exports = command;
//# sourceMappingURL=ping.js.map