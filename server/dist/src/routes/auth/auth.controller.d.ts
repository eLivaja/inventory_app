import { Request, Response } from 'express';
declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    login: typeof login;
};
export default _default;
