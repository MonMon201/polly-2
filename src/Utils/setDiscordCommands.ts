import { ApplicationCommand } from 'discord-slash-commands-client';
import { deleteApiCommands } from './deleteApiCommands';
import { getApiCommands } from './getApiCommands';
import { getCommands } from './getCommands';
import { updateCommands } from './updateCommands';

export const setDiscordBotCommands = async (
    token: string,
    clientId: string,
): Promise<ApplicationCommand[]> => {
    const url = `https://discord.com/api/v8/applications/${clientId}/commands`;
    const commands = await getCommands();
    const apiCommandsResponse = await getApiCommands(token, url);
    console.log('API COMMANDS RESPONSE', apiCommandsResponse.data.map((apiCommand) => apiCommand));
    // const deletedCommandsResponse = await deleteApiCommands(apiCommandsResponse.data.map((command) => command.id), [], token, url)
    // return deletedCommandsResponse.map((deletedCommand) => deletedCommand.data);
    if (commands.length === apiCommandsResponse.data.length) {
      return apiCommandsResponse.data;
    }
    const updatedApiCommands = await updateCommands(commands, url, token, []);
    return updatedApiCommands.map((updatedApiCommand) => updatedApiCommand.data);
};
