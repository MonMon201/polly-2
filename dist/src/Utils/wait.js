"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
const wait = (ms) => new Promise((resolve) => setTimeout(() => {
    resolve(ms);
}, ms));
exports.wait = wait;
//# sourceMappingURL=wait.js.map