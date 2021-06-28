import axios, { AxiosResponse } from "axios";
import { ApplicationCommand } from "discord-slash-commands-client";
import { wait } from "./wait";

export const deleteApiCommands = async (commandIds: string[], responses: AxiosResponse<ApplicationCommand>[], token: string, url: string, i: number = 0): Promise<AxiosResponse<ApplicationCommand>[]> => {
    if (i >= commandIds.length) {
        return responses;
    }
    const commandId = commandIds[i];
    const deleteUrl = `${url}/${commandId}`
    const response: AxiosResponse<ApplicationCommand> = await axios.delete(deleteUrl, {
        headers: { Authorization: `Bot ${token}` },
    });
    console.log(response);
    responses.push(response);
    i++;
    const timeout = await wait(4000);
    console.log(timeout);
    return deleteApiCommands(commandIds, responses, token, url, i);
}