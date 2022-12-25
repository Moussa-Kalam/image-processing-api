"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    // console.log(req.query);
    // return res.json({
    //   message: 'Hello world',
    //   filename: req.query.filename,
    //   width: req.query.width,
    //   height: req.query.height
    // });
    let filename = req.query.filename;
    let width = req.query.width;
    let height = req.query.height;
    return res.send(`You requested the image ${filename} with a width of ${width} and a height of ${height}`);
});
exports.default = routes;
