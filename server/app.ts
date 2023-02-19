import * as dotenv from 'dotenv';
import express from 'express';

import { init as databaseInit } from './src/database';
import routes from './src/routes';

const app = express();
dotenv.config();

databaseInit()
	.then(() => routes.init(app))
	.then(() => {
		const PORT = process.env.PORT || 3000;

		return app.listen(PORT, () =>
			console.log(`Server running on port ${PORT}`)
		);
	});
