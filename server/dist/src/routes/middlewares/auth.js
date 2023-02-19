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
exports.checkJwt = void 0;
const http_status_codes_1 = require("http-status-codes");
const jwt = __importStar(require("jsonwebtoken"));
const authentication_1 = __importDefault(require("../../config/authentication"));
const database_1 = require("../../database");
const User_1 = __importDefault(require("../../database/entities/User"));
const httpError_1 = __importDefault(require("../../shared/errors/httpError"));
const cookieName = authentication_1.default.cookie.name;
const { UNAUTHORIZED } = http_status_codes_1.StatusCodes;
function checkJwt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies[cookieName];
        if (!token)
            return next(new httpError_1.default(UNAUTHORIZED, 'No cookie found.'));
        try {
            const jwtPayload = jwt.verify(token, authentication_1.default.jwtSecret);
            res.locals.jwtPayload = jwtPayload;
        }
        catch (error) {
            res.clearCookie(cookieName);
            return next(new httpError_1.default(UNAUTHORIZED, 'Token not valid.'));
        }
        const { id } = res.locals.jwtPayload;
        req.user = yield database_1.db.instance.em.getRepository(User_1.default).findOne(id);
        if (!req.user) {
            res.clearCookie(cookieName);
            return next(new httpError_1.default(UNAUTHORIZED, 'Token not valid.'));
        }
        return next();
    });
}
exports.checkJwt = checkJwt;
