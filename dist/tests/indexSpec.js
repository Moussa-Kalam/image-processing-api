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
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
it('should return 200 for GET /api/images', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.get('/api/images');
    expect(res.status).toBe(200);
}));
it('should return status 404 for GET /api/image', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.get('/api/image');
    expect(res.status).toBe(404);
}));
it('should resize image if url is complete', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.get('/api/images?filename=santamonica.jpg&width=200&height=200');
    expect(res.status).toBe(200);
}));
