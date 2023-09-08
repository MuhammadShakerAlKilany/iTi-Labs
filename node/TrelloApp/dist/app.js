"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const mongodbURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
app.use((req, res, next) => {
    console.log("Method:", req.method, "URL:", req.url);
    next();
});
app.get("/api/v1", (req, res) => {
    res.send("<h1> Hi to my API  I'm Muhammad shaker AlKilany </h1>");
});
app.all("/*", (req, res) => {
    res.status(404).json({ message: `Not Found '${req.url}'` });
});
app.listen(port, () => {
    console.log(`server run in http://127.0.0.1:${port}/api/v1 `);
});
mongoose_1.default.connect(mongodbURL).then(() => {
    console.log(`connected with ${mongodbURL}`);
}).catch((err) => {
    console.log(err);
});
