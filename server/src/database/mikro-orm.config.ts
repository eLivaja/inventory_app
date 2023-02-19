import * as dotenv from 'dotenv';

import createConfig from '../config/database';
import entities from './entities';

dotenv.config();
const database = createConfig(process.env);

export default {
	...database,
	entities,
};
