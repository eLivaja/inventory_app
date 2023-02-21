"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./src/database");
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
(0, database_1.init)()
    .then(() => routes_1.default.init(app))
    .then(() => {
    const PORT = process.env.PORT || 3000;
    return app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
