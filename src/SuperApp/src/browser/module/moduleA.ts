export class ModuleA {
	public sum(a: number, b: number): number {
		return a + b;
	}

	public apiRequest(): Promise<number> {
		return Promise.resolve(this.sum(10, 2) * this.sum(1, 2));
	}
}
