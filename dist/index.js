"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3000;
app.use(logger_1.default);
app.use('/api/images', routes_1.imagesRoutes);
app.get('/api', (req, res) => { }); // GET http://localhost:3000/
// Start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
