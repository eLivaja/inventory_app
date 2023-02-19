import { Router } from 'express';

import controller from './user.controller.js';

const router = Router();

router.get('/me', controller.get).get('/', controller.getAll);

export default {
	root: '/users',
	router,
};
