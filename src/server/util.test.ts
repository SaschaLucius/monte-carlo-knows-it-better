import { expect, test } from 'vitest';
import { isEqual } from './util';

describe('Utils', () => {
	test('empty', () => {
		expect(isEqual({}, {})).toBeTruthy();
	});

	test('single', () => {
		expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBeTruthy();
	});

	test('single different', () => {
		expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 2 })).toBeFalsy();
	});

	test('single additional', () => {
		expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1, c: 3 })).toBeFalsy();
	});
});
