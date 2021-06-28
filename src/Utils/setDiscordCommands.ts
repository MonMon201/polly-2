import { ApplicationCommand } from 'discord-slash-commands-client';
import { getApiCommands } from './getApiCommands';
import { getCommands } from './getCommands';
import { updateCommands } from './updateCommands';

export const setDiscordBotCommands = async (
    token: string,
    clientId: string,
): Promise<ApplicationCommand[]> => {
    console.log(token, clientId);
    const url = `https://discord.com/api/v8/applications/${clientId}/commands`;
    const commands = await getCommands();
    const apiCommandsResponse = await getApiCommands(token, url);
    if (commands.length === apiCommandsResponse.data.length) {
      return apiCommandsResponse.data;
    }
    const updatedApiCommands = await updateCommands(commands, url, token, []);
    return updatedApiCommands.map((updatedApiCommand) => updatedApiCommand.data);
};
