"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDiscordBotCommands = void 0;
const discord_slash_commands_client_1 = require("discord-slash-commands-client");
const getCommands_1 = require("./getCommands");
const setDiscordBotCommands = async (token, clientId) => {
    console.log(token, clientId);
    const client = new discord_slash_commands_client_1.Client(token, clientId);
    const commands = await client.getCommands({});
    console.log(commands);
    const commande = await getCommands_1.getCommands();
    const command = commande[2];
    console.log(command);
    const response = await client
        .createCommand({
        name: command.name,
        description: `Description: ${command.description}, Example: ${command.example}`,
    });
    return response;
    // const commands = await getCommands();
    // const responses = await Promise.all(commands.map(async (command) => 
    // client
    //   .createCommand({
    //     name: command.name,
    //     description: `Description: ${command.description}, Example: ${command.example}`,
    //   })));
    // return responses;
};
exports.setDiscordBotCommands = setDiscordBotCommands;
//# sourceMappingURL=setDiscordCommands.js.map