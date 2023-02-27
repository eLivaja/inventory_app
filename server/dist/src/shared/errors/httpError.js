'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class HttpError extends Error {
	constructor(status, ...params) {
		super(...params);
		this.name = 'HttpError';
		this.status = status;
		Error.captureStackTrace(this, HttpError);
	}
}
exports.default = HttpError;
