'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = require('express');
const user_controller_js_1 = __importDefault(require('./user.controller.js'));
const router = (0, express_1.Router)();
router
	.get('/me', user_controller_js_1.default.get)
	.get('/', user_controller_js_1.default.getAll);
exports.default = {
	root: '/users',
	router,
};
