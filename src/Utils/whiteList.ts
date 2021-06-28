import { Message } from "discord.js";
import config from '../../config.json';
import { getConfig } from "../Env/environment";

export const checkWhiteList = (message: Message): boolean => {
    const { prod } = getConfig();
    const whiteList = prod ? config.prodWhiteList : config.devWhiteList;
    console.log(whiteList)
    return !!whiteList.find((el) => el === message.guild?.id || '');
}