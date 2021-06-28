import axios, { AxiosResponse } from "axios"
import { ApplicationCommand } from "discord-slash-commands-client"

export const getApiCommands = async (token: string, url: string): Promise<AxiosResponse<ApplicationCommand[]>> => {
    return axios.get(url, {
        headers: { Authorization: `Bot ${token}`}
    })
}