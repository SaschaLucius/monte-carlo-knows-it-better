import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);

	return store;
};

interface Config {
	baseWork: number;
	baseProfit: number;
	additionalWork: number;
	additionalProfit: number;

	defaultRounds: number;
	forecastLikelihood: number;
	historicData: string;
	diceSides: string;
	defaultDevelopers: number;
	developerCostPerRound: number;
}

export const config = storage<Config>('config', {
	baseWork: 40,
	baseProfit: 250,

	additionalWork: 10,
	additionalProfit: 45,

	defaultRounds: 5,
	forecastLikelihood: 85,
	historicData: '1,3,5,3,7,8,1',
	diceSides: '0,1,1,2,2,3',
	defaultDevelopers: 6,
	developerCostPerRound: 5
});
