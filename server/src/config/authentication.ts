const COOKIE_OPTIONS = {
	SECURE: {
		httpOnly: true,
		secure: true,
	},
	DEFAULT: {},
};

export default {
	saltRounds: process.env.SALT_ROUNDS || 10,
	jwtSecret: process.env.AUTH_JWT_SECRET || 'fuck you',
	cookie: {
		name: 'inventory_access_token',
		options: process.env.AUTH_SECURE_COOKIE
			? COOKIE_OPTIONS.SECURE
			: COOKIE_OPTIONS.DEFAULT,
	},
};
