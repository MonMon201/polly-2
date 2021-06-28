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
    console.log(commande[2]);
    const response = await client
      .createCommand({
        name: commande[2].name,
        description: `Description: ${commande[2].description}, Example: ${commande[2].example}`,
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
