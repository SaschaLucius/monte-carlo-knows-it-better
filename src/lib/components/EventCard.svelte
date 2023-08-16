<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;

	let events: {
		id: number;
		text: string;
		rounds: number | undefined;
		scope: number | undefined;
		diceValue: number | undefined;
		dices: number | undefined;
		cost: number | undefined;
	}[] = [
		{
			id: 1,
			text: '+2 Runden mehr Zeit',
			rounds: 2,
			scope: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			id: 2,
			text: 'Scope Basisfunktion +2',
			scope: 2,
			rounds: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			id: 3,
			text: 'Scope Basisfunktion +4',
			rounds: 4,
			scope: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			id: 4,
			text: 'Durchsatz +2 für diese Runde',
			diceValue: 2,
			rounds: undefined,
			scope: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			id: 5,
			text: '+25k Kosten',
			cost: 25,
			rounds: undefined,
			scope: undefined,
			diceValue: undefined,
			dices: undefined
		}
	];

	function reveal() {
		let result = Math.floor(Math.random() * events.length);
		$state.rounds[index].event = events[result];
	}
</script>

<button on:click|once={reveal}
	>{typeof $state.rounds[index].event === 'undefined'
		? 'Aufdecken!'
		: $state.rounds[index].event?.text}</button
>
