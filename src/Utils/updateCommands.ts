import axios, { AxiosResponse } from 'axios';
import { ApplicationCommand, ApplicationOptions } from 'discord-slash-commands-client';
import { Command } from '../Interfaces/Command';
import { wait } from './wait';

export const updateCommands = async (
    commands: Command[],
    url: string,
    token: string,
    responses: AxiosResponse<ApplicationCommand>[] = [],
    i: number = 0,
): Promise<AxiosResponse<ApplicationCommand>[]> => {
    if (i >= commands.length) {
        return responses;
    }
    const command = commands[i];
    const name = command.name;
    const description = `Description: ${command.description}, Example: ${command.example}`;
    const body: ApplicationOptions = {
        name,
        description,
        options: command.options,
    };
    const response: AxiosResponse<ApplicationCommand> = await axios.post(url, body, {
        headers: { Authorization: `Bot ${token}` },
    });
    console.log(response);
    responses.push(response);
    i++;
    const timeout = await wait(4000);
    console.log(timeout);
    return updateCommands(commands, url, token, responses, i);
};
