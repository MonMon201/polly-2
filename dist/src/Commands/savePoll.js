"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const constants_1 = require("../constants");
const getOptions_1 = require("../Utils/getOptions");
const savePoll = async (message, args) => {
    const name = args[0];
    const fileName = name + '.json';
    const options = getOptions_1.getOptions(args.slice(1, args.length));
    const savesRoute = `${__dirname}/../../saves`;
    if (!fs_1.existsSync(savesRoute)) {
        fs_1.mkdirSync(savesRoute);
    }
    fs_1.writeFileSync(`${savesRoute}/${fileName}`, JSON.stringify({
        options,
    }));
    message.channel.send(`Poll saved with name: \n${name}`);
};
const command = {
    name: 'savePoll',
    description: 'Create a new poll',
    execute: savePoll,
    example: `${constants_1.prefix}savePoll PollName option a, option b, option c`,
};
module.exports = command;
//# sourceMappingURL=savePoll.js.map