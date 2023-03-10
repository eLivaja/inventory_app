import { Router } from 'express';

import controller from './auth.controller';

const router = Router();

router.post('/login', controller.login);

export default {
	root: '/auth',
	router,
};
