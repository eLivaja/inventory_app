import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import RequestContextMiddleware from './RequestContext.js';
import helmetMiddlewares from './helmet.js';

export default {
	pre: [
		cors(),
		express.urlencoded(),
		express.json(),
		cookieParser(),
		...helmetMiddlewares,
		RequestContextMiddleware,
	],
};
