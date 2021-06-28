"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDiscordBotCommands = void 0;
const getApiCommands_1 = require("./getApiCommands");
const getCommands_1 = require("./getCommands");
const updateCommands_1 = require("./updateCommands");
const setDiscordBotCommands = async (token, clientId) => {
    const url = `https://discord.com/api/v8/applications/${clientId}/commands`;
    const commands = await getCommands_1.getCommands();
    const apiCommandsResponse = await getApiCommands_1.getApiCommands(token, url);
    console.log('API COMMANDS RESPONSE', apiCommandsResponse.data.map((apiCommand) => apiCommand));
    // const deletedCommandsResponse = await deleteApiCommands(apiCommandsResponse.data.map((command) => command.id), [], token, url)
    // return deletedCommandsResponse.map((deletedCommand) => deletedCommand.data);
    if (commands.length === apiCommandsResponse.data.length) {
        return apiCommandsResponse.data;
    }
    const updatedApiCommands = await updateCommands_1.updateCommands(commands, url, token, []);
    return updatedApiCommands.map((updatedApiCommand) => updatedApiCommand.data);
};
exports.setDiscordBotCommands = setDiscordBotCommands;
//# sourceMappingURL=setDiscordCommands.js.map