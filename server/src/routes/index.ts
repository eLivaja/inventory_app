import middlewares from './middlewares';
import router from './router';

export default {
	init(app) {
		app.use(middlewares.pre);
		app.use('/api', router);
	},
};
