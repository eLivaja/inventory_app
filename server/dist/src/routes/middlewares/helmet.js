"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
exports.default = [
    helmet_1.default.crossOriginEmbedderPolicy(),
    helmet_1.default.crossOriginOpenerPolicy(),
    helmet_1.default.crossOriginResourcePolicy(),
    helmet_1.default.dnsPrefetchControl(),
    helmet_1.default.expectCt(),
    helmet_1.default.hidePoweredBy(),
    helmet_1.default.hsts(),
    helmet_1.default.ieNoOpen(),
    helmet_1.default.noSniff(),
    helmet_1.default.originAgentCluster(),
    helmet_1.default.permittedCrossDomainPolicies(),
    helmet_1.default.referrerPolicy(),
    helmet_1.default.xssFilter(),
];
