"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const getOptions_1 = require("../Utils/getOptions");
const runPoll_1 = require("../Utils/runPoll");
const createPoll = async (message, args) => {
    const options = getOptions_1.getOptions(args);
    await runPoll_1.runPoll(message, options);
};
const command = {
    name: 'create_poll',
    description: 'Create a new poll',
    execute: createPoll,
    example: `${constants_1.prefix}createPoll option a, option b, option c`,
    options: [
        {
            name: 'options',
            description: `type in options you'd like to see`,
            type: 3,
            required: true,
        },
    ],
};
module.exports = command;
//# sourceMappingURL=createPoll.js.map