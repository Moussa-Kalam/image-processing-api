"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../functionalities/app"));
it('expect myFunc to return the square of a number', () => {
    expect((0, app_1.default)(2)).toBe(4);
});
//
