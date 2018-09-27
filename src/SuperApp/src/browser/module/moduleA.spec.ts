import { ModuleA } from './moduleA';

describe('Cover moduleA, some simple tests', () => {
	let g: ModuleA;

	beforeEach(() => {
		g = new ModuleA();
		jest.spyOn(g, 'sum');
	});

	it('our first simple test', () => {
		expect(g.sum(1, 2)).toBe(3);
		expect(g.sum).toBeCalledTimes(1);
	});

	it('test async method', () => {
		return g.apiRequest().then(res => {
			expect(res).toBe(36);
			expect(g.sum).toBeCalledTimes(2);
		});
	});
});
