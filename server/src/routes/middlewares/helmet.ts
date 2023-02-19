import helmet from 'helmet';

export default [
	helmet.crossOriginEmbedderPolicy(),
	helmet.crossOriginOpenerPolicy(),
	helmet.crossOriginResourcePolicy(),
	helmet.dnsPrefetchControl(),
	helmet.expectCt(),
	helmet.hidePoweredBy(),
	helmet.hsts(),
	helmet.ieNoOpen(),
	helmet.noSniff(),
	helmet.originAgentCluster(),
	helmet.permittedCrossDomainPolicies(),
	helmet.referrerPolicy(),
	helmet.xssFilter(),
];
