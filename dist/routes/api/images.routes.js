"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs_1 = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp = require('sharp');
const routes = express_1.default.Router();
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let filename = req.query.filename;
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    // With not filename, the server doesn't crash, and the error message to the browser is sent to the browser
    // For width as string, the server crashed, but returned the error message to the client
    // When I give width a value of 0, I have the error message in the browser, without my server crashing. Thats correct 
    if (Number.isNaN(width) || Number.isNaN(height) || width <= 0 || height <= 0) {
        return res.send(`Invalid input. Please check width and height!
      Must be a number and greater than 0!
      `);
    }
    // Okay
    //Now we must check if the filename given exists in our images directory   
    // Doing some googling. Remeber we are checking for the filename not the resised image add the ${filename} after full/
    if (!filename || filename === "" || !fs_1.default.existsSync(path_1.default.join(__dirname, `../../uploads/images/full/${filename}`))) {
        return res.send('Please provide a valid filename!');
        //Add return statement
    }
    if (!width || !height) {
        return res.send('Please ensure you provided a width and a height.');
    }
    //  and still works with valid filename and width\height?? // Yes, it works 
    //Wondeful so now for caching  // Okay
    // Caching works the same as checking for the filename, instead you check if the file exists in your thumbnails and return it if it does
    // You have to check before you resize the image   
    (0, fs_1.readFile)(`./src/uploads/images/full/${filename}`, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw err;
        }
        // You have to check for the image with the same name, width and height. Remember you are sending a file now
        if (fs_1.default.existsSync(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`))) {
            return res.sendFile(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`));
        }
        yield sharp(data)
            .resize(width, height)
            .toFile(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`));
        res.sendFile(path_1.default.join(__dirname, `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`));
        return;
    }));
}));
exports.default = routes;
