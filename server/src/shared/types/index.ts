import User from '../../database/entities/User';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface Request {
			user: User | null;
		}
	}
}
