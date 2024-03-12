import { writable } from 'svelte/store';

const storage = <T>(key: string, initValue: T) => {
	const { subscribe, set } = writable(initValue);
	return {
		subscribe,
		set: (value: T) => set(value),
		reset: () => set(initValue)
	};
};

export const DEFAULT_STATE = {
	diceAmount: 0,
	dices: [],
	diceValues: [],
	maxRounds: 0,
	finishedRounds: 0,
	rounds: [
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		},
		{
			remaining: null,
			profit: null,
			cost: null,
			forecast: null,
			decision: '0',
			event: null,
			finishedWork: null
		}
	]
};

export interface State {
	diceAmount: number;
	dices: (number | null)[];
	diceValues: number[];
	maxRounds: number;
	finishedRounds: number;
	rounds: {
		remaining: number | null;
		profit: number | null;
		cost: number | null;
		forecast: number | null;
		decision: string;
		event: {
			id: number;
			text: string;
			rounds: number | null;
			scope: number | null;
			diceValue: number | null;
			dices: number | null;
			cost: number | null;
		} | null;
		finishedWork: number | null;
	}[];
}

export const state = storage<State>('state', DEFAULT_STATE);
