import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MySweetLabel } from './mySweetLabels';

describe('test my new component', () => {
	it('lets render it and check!', () => {
		const a = renderer.create(<MySweetLabel name="fella!" />).toJSON();

		expect(a).toMatchSnapshot();
	});

	it('paste random screenshot', () => {
		const a = { name: 'good guy!' };

		expect(JSON.stringify(a)).toMatchSnapshot();
	});
});
