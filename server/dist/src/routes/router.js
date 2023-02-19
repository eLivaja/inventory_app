"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const auth_2 = require("./middlewares/auth");
const user_1 = __importDefault(require("./user"));
const router = express_1.default.Router();
// unsecured routes
router.use(auth_1.default.root, auth_1.default.router);
// authorization middlewares
router.use(auth_2.checkJwt);
// secured routes
router.use(user_1.default.root, user_1.default.router);
exports.default = router;
