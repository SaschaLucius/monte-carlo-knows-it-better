import { expect, test } from 'vitest';
import { monteCarloLikelihoodForecast } from './forecast';

const defaultIterations = 5000;

describe('MonteCarloLikelihoodForecast', () => {
	test('empty', () => {
		expect(monteCarloLikelihoodForecast([], 20, defaultIterations, 'test', 100)).toEqual([]);
	});

	test('one', () => {
		expect(monteCarloLikelihoodForecast([1], 20, defaultIterations, 'test', 100)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('two', () => {
		expect(monteCarloLikelihoodForecast([2], 20, defaultIterations, 'test', 100)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 10,
					likelihood: 100
				}
			])
		);
	});

	test('one one', () => {
		expect(monteCarloLikelihoodForecast([1, 1], 20, defaultIterations, 'test', 100)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 20,
					likelihood: 100
				}
			])
		);
	});

	test('two two', () => {
		expect(monteCarloLikelihoodForecast([2, 2], 20, defaultIterations, 'test', 100)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 10,
					likelihood: 100
				}
			])
		);
	});

	test('one two', () => {
		expect(monteCarloLikelihoodForecast([1, 2], 20, defaultIterations, 'test', 100)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 16,
					likelihood: 95
				}
			])
		);
	});

	test('one two three', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3], 20, defaultIterations, 'test', 100)).toEqual(
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

	test('one two three', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 100)).toEqual(
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

	test('one two three 75%', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 75)).toEqual(
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

	test('one two three 50%', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 50)).toEqual(
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

	test('one two three 25%', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 25)).toEqual(
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

	test('one two three 5%', () => {
		expect(monteCarloLikelihoodForecast([1, 2, 3, 4], 20, defaultIterations, 'test', 5)).toEqual(
			expect.arrayContaining([
				{
					completionTime: 154,
					likelihood: 10
				},
				{
					completionTime: 161,
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
