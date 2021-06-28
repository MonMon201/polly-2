import { Client } from "discord-slash-commands-client";
import { getCommands } from "./getCommands";

export const setDiscordBotCommands = async (token: string, clientId: string) => {
    console.log(token, clientId)
    const client = new Client(
      token,
      clientId
    );
    
    const commands = await client.getCommands({});
    console.log(commands);
    const commande = await getCommands();
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
}
