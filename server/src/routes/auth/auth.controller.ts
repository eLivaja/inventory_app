import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

import authConfig from '../../config/authentication';
import User from '../../database/entities/User';
import { db } from '../../database/index';
import HttpError from '../../shared/errors/httpError';

const { BAD_REQUEST, UNAUTHORIZED } = StatusCodes;
const cookieConfig = authConfig.cookie;
const jwtSecret = authConfig.jwtSecret;

async function login(req: Request, res: Response) {
	const { email, password } = req.body;
	if (!email) throw new HttpError(BAD_REQUEST, 'email required');
	if (!password) throw new HttpError(BAD_REQUEST, 'password required');

	const user: User = await db.instance.em
		.getRepository(User)
		.findOneOrFail({ email });

	if (!user.checkIfUnencryptedPasswordIsValid(password)) {
		throw new HttpError(UNAUTHORIZED, 'Can not be found.');
	}

	const jwtToken = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
		expiresIn: '1h',
	});

	return res
		.cookie(cookieConfig.name, jwtToken, cookieConfig.options)
		.json({ success: true });
}

export default {
	login,
};
