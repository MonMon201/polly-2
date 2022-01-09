"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const healthcheck = async (message) => {
    message.channel.send(`Status: ${constants_1.botStatus.ONLINE}`);
};
const command = {
    name: 'healthcheck',
    description: 'Check if bot is up',
    example: `${constants_1.prefix}healthcheck`,
    execute: healthcheck,
};
module.exports = command;
//# sourceMappingURL=healthcheck.js.map