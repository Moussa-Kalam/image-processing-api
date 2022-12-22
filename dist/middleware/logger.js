"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    let url = req.url;
    console.log(`Request received for ${url}`);
    next();
};
exports.default = logger;
