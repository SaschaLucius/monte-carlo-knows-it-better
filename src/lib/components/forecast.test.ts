import { expect, test } from 'vitest';
import { monteCarloLikelihoodForecast } from './forecast';

const defaultIterations = 20000;

describe('MonteCarloLikelihoodForecast', () => {
	test('empty', () => {
		expect(monteCarloLikelihoodForecast([], 20, defaultIterations, 'test', 100, undefined)).toEqual(
			[]
		);
	});

	test('one', () => {
		expect(
			monteCarloLikelihoodForecast([1], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('two', () => {
		expect(
			monteCarloLikelihoodForecast([2], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 10,
					likelihood: 100
				}
			])
		);
	});

	test('one one', () => {
		expect(
			monteCarloLikelihoodForecast([1, 1], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('two two', () => {
		expect(
			monteCarloLikelihoodForecast([2, 2], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 10,
					likelihood: 50
				},
				{
					completionTime: 10,
					likelihood: 100
				}
			])
		);
	});

	test('two two 20SP Diff', () => {
		expect(monteCarloLikelihoodForecast([2, 2], 20, defaultIterations, 'test', 100, 40)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 15,
					likelihood: 50
				},
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('two two 50%', () => {
		expect(
			monteCarloLikelihoodForecast([2, 2], 20, defaultIterations, 'test', 50, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('one two', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 12,
					likelihood: 10
				},
				{
					completionTime: 14,
					likelihood: 50
				},
				{
					completionTime: 15,
					likelihood: 85
				},
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('one two 20SP diff', () => {
		expect(monteCarloLikelihoodForecast([1, 2], 20, defaultIterations, 'test', 100, 40)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 14,
					likelihood: 10
				},
				{
					completionTime: 20,
					likelihood: 50
				},
				{
					completionTime: 25,
					likelihood: 85
				},
				{
					completionTime: 35,
					likelihood: 100
				}
			])
		);
	});

	test('one two three', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 7,
					likelihood: 0
				},
				{
					completionTime: 10,
					likelihood: 50
				},
				{
					completionTime: 13,
					likelihood: 95
				}
			])
		);
	});

	test('one two three four', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 100, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 7,
					likelihood: 10
				},
				{
					completionTime: 8,
					likelihood: 50
				},
				{
					completionTime: 10,
					likelihood: 85
				}
			])
		);
	});

	test('one two three four 75%', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 75, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 9,
					likelihood: 10
				},
				{
					completionTime: 11,
					likelihood: 50
				},
				{
					completionTime: 13,
					likelihood: 85
				}
			])
		);
	});

	test('one two three four 50%', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 50, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 14,
					likelihood: 10
				},
				{
					completionTime: 16,
					likelihood: 50
				},
				{
					completionTime: 18,
					likelihood: 85
				}
			])
		);
	});

	test('one two three four 25%', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 25, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 29,
					likelihood: 10
				},
				{
					completionTime: 32,
					likelihood: 50
				},
				{
					completionTime: 35,
					likelihood: 85
				}
			])
		);
	});

	test('one two three four 5%', () => {
		expect(
			monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 5, undefined)
		).toEqual(
			expect.arrayContaining([
				{
					completionTime: 153,
					likelihood: 10
				},
				{
					completionTime: 160,
					likelihood: 50
				},
				{
					completionTime: 166,
					likelihood: 85
				}
			])
		);
	});
});
