import { RequestContext } from '@mikro-orm/core';

import { db } from '../../database';

export default (_req, _res, next) => {
	RequestContext.create(db.instance.em, next);
};
