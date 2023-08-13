<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let index: number;

	const dispatch = createEventDispatcher();

	let text = 'Aufdecken';

	let events: {
		text: string;
		rounds: number | undefined;
		scope: number | undefined;
		diceValue: number | undefined;
		dices: number | undefined;
		cost: number | undefined;
	}[] = [
		{
			text: '+2 Runden mehr Zeit',
			rounds: 2,
			scope: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			text: 'Scope Basisfunktion +2',
			scope: 2,
			rounds: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			text: 'Scope Basisfunktion +4',
			rounds: 4,
			scope: undefined,
			diceValue: undefined,
			dices: undefined,
			cost: undefined
		},
		{
			text: 'Durchsatz +2 für diese Runde',
			diceValue: 2,
			rounds: undefined,
			scope: undefined,
			dices: undefined,
			cost: undefined
		},
		{
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
		text = events[result].text;
		dispatch('revealEvent', {
			index: index,
			event: events[result]
		});
	}
</script>

<button on:click|once={reveal}>{text}</button>
