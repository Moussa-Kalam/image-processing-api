"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) => {
    const url = req.url;
    console.log(`Request received for ${url}`);
    next();
};
exports.default = logger;
