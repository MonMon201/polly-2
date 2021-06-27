import { Message } from 'discord.js';

export interface Command {
    name: string;
    description: string;
    example: string;
    execute: (message: Message, args: string[]) => void;
}
