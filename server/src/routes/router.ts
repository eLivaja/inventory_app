import express from 'express';

import authRouter from './auth';
import { checkJwt } from './middlewares/auth';
import userRouter from './user';

const router = express.Router();

// unsecured routes
router.use(authRouter.root, authRouter.router);

// authorization middlewares
router.use(checkJwt);

// secured routes
router.use(userRouter.root, userRouter.router);

export default router;
