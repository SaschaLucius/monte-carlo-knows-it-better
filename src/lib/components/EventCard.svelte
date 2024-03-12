<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;

	let events: {
		id: number;
		text: string;
		rounds: number | null;
		scope: number | null;
		diceValue: number | null;
		dices: number | null;
		cost: number | null;
	}[] = [
		{
			id: 1,
			text: '+2 Runden mehr Zeit',
			rounds: 2,
			scope: null,
			diceValue: null,
			dices: null,
			cost: null
		},
		{
			id: 2,
			text: 'Scope Basisfunktion +2',
			scope: 2,
			rounds: null,
			diceValue: null,
			dices: null,
			cost: null
		},
		{
			id: 3,
			text: 'Scope Basisfunktion +4',
			rounds: 4,
			scope: null,
			diceValue: null,
			dices: null,
			cost: null
		},
		{
			id: 4,
			text: 'Durchsatz +2 für diese Runde',
			diceValue: 2,
			rounds: null,
			scope: null,
			dices: null,
			cost: null
		},
		{
			id: 5,
			text: '+25k Kosten',
			cost: 25,
			rounds: null,
			scope: null,
			diceValue: null,
			dices: null
		}
	];

	function reveal() {
		let result = Math.floor(Math.random() * events.length);
		$state.rounds[index].event = events[result];
	}
</script>

<button on:click|once={reveal}
	>{$state.rounds[index].event === null ? 'Aufdecken!' : $state.rounds[index].event?.text}</button
>
