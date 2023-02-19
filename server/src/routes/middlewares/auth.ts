import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

import authConfig from '../../config/authentication';
import { db } from '../../database';
import User from '../../database/entities/User';
import HttpError from '../../shared/errors/httpError';

const cookieName = authConfig.cookie.name;
const { UNAUTHORIZED } = StatusCodes;

export async function checkJwt(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const token: string = req.cookies[cookieName];
	if (!token) return next(new HttpError(UNAUTHORIZED, 'No cookie found.'));

	try {
		const jwtPayload = jwt.verify(token, authConfig.jwtSecret);
		res.locals.jwtPayload = jwtPayload;
	} catch (error) {
		res.clearCookie(cookieName);
		return next(new HttpError(UNAUTHORIZED, 'Token not valid.'));
	}

	const { id } = res.locals.jwtPayload;

	req.user = await db.instance.em.getRepository(User).findOne(id);
	if (!req.user) {
		res.clearCookie(cookieName);
		return next(new HttpError(UNAUTHORIZED, 'Token not valid.'));
	}

	return next();
}
