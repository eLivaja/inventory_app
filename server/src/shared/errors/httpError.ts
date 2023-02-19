class HttpError extends Error {
	public status: string | undefined;

	constructor(status, ...params) {
		super(...params);
		this.name = 'HttpError';
		this.status = status;
		Error.captureStackTrace(this, HttpError);
	}
}

export default HttpError;
