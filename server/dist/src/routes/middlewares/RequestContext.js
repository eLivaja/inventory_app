'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@mikro-orm/core');
const database_1 = require('../../database');
exports.default = (_req, _res, next) => {
	core_1.RequestContext.create(database_1.db.instance.em, next);
};
