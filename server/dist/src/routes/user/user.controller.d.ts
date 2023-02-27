import { Request, Response } from 'express';

declare function get(
	req: Request,
	res: Response
): Response<any, Record<string, any>>;
declare function getAll(
	_req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>>;
declare const _default: {
	get: typeof get;
	getAll: typeof getAll;
};
export default _default;
