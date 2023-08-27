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
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		},
		{
			remaining: undefined,
			profit: undefined,
			cost: undefined,
			forecast: undefined,
			decision: '0',
			event: undefined,
			finishedWork: undefined
		}
	]
};

export interface State {
	diceAmount: number;
	dices: (number | undefined)[];
	diceValues: number[];
	maxRounds: number;
	finishedRounds: number;
	rounds: {
		remaining: number | undefined;
		profit: number | undefined;
		cost: number | undefined;
		forecast: number | undefined;
		decision: string;
		event:
			| {
					id: number;
					text: string;
					rounds: number | undefined;
					scope: number | undefined;
					diceValue: number | undefined;
					dices: number | undefined;
					cost: number | undefined;
			  }
			| undefined;
		finishedWork: number | undefined;
	}[];
}

export const state = storage<State>('state', DEFAULT_STATE);
