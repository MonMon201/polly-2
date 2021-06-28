"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const environment_1 = require("./Env/environment");
const polly_1 = require("./polly");
polly_1.polly.start(environment_1.getConfig());
//# sourceMappingURL=index.js.map