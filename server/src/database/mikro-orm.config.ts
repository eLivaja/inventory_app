import createConfig from '../config/database';
import entities from './entities';

const database = createConfig(process.env);

export default {
	...database,
	entities,
};
