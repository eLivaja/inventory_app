declare class HttpError extends Error {
    status: string | undefined;
    constructor(status: any, ...params: any[]);
}
export default HttpError;
