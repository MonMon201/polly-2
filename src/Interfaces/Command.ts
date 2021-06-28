import { Message } from 'discord.js';
import { ApplicationCommandOption } from 'discord-slash-commands-client';
export interface Command {
    name: string;
    description: string;
    example: string;
    execute: (message: Message, args: string[]) => void;
    options?: ApplicationCommandOption[];
}
