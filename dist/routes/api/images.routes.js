"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp = require('sharp');
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    let filename = req.query.filename;
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    (0, fs_1.readFile)(`./src/uploads/images/full/${filename}`, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw err;
        }
        yield sharp(data)
            .resize(width, height)
            .toFile(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`));
        res.sendFile(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`));
        return;
    }));
});
exports.default = routes;
