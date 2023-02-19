import { Request, Response } from 'express';

import { db } from '../../database';
import User from '../../database/entities/User.js';

function get(req: Request, res: Response) {
	const { user } = req;
	return res.json({ user });
}

async function getAll(_req: Request, res: Response) {
	const users = await db.instance.em.getRepository(User).findAll();
	return res.json({ users });
}

export default {
	get,
	getAll,
};
