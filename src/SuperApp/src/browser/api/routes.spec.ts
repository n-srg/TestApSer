import * as unexpectedWrapper from 'unexpected';
import * as unexpectedExpress from 'unexpected-express';
import { wrapRouter } from '@tradeshift/v4';
import routes from './routes';

const mock = unexpectedWrapper.clone().installPlugin(unexpectedExpress);

describe('test api', () => {
	it('first test', () => {
		return mock(routes, 'to yield exchange', {
			request: '/my-api',
			response: {
				statusCode: 200,
				body: '42'
			}
		});
	});
});
