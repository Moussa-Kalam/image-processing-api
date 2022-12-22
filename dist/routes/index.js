"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./api/users.routes"));
const sponsors_routes_1 = __importDefault(require("./api/sponsors.routes"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('Main API Route');
});
routes.use('/users', users_routes_1.default);
routes.use('/sponsors', sponsors_routes_1.default);
exports.default = routes;
