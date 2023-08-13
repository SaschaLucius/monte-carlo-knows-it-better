<script lang="ts">
	import WorkDone from '../lib/components/WorkDone.svelte';
	import EventCard from '../lib/components/EventCard.svelte';
	import RemainingWork from '../lib/components/RemainingWork.svelte';
	import ForecastField from '../lib/components/ForecastField.svelte';
	import ActionCard from '../lib/components/ActionCard.svelte';
	import Dice from '$lib/components/Dice.svelte';

	let state: {
		diceAmount: number;
		dices: Dice[];
		diceValues: number[];
		maxRounds: number;
		finishedRounds: number;
		rounds: {
			remaining: number | undefined;
			profit: number | undefined;
			cost: number | undefined;
			forecast: number | undefined;
			decision: number | undefined;
			event:
				| {
						rounds: number | undefined;
						scope: number | undefined;
						diceValue: number | undefined;
						dices: number | undefined;
						cost: number | undefined;
				  }
				| undefined;
			finishedWork: number | undefined;
		}[];
	} = {
		diceAmount: 6,
		dices: [],
		diceValues: [],
		maxRounds: 5,
		finishedRounds: 0,
		rounds: [
			{
				remaining: 50,
				profit: 295,
				cost: 30,
				forecast: 7,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			},
			{
				remaining: undefined,
				profit: undefined,
				cost: undefined,
				forecast: undefined,
				decision: undefined,
				event: undefined,
				finishedWork: undefined
			}
		]
	};

	function rollDices() {
		for (const [index, dice] of state.dices.entries()) {
			state.diceValues[index] = dice.roll();
		}
		console.log(state.diceValues);
	}

	function updateDices(index: number, event: Event): void {
		const target = event.target as HTMLSelectElement;
		state.rounds[index].decision = parseInt(target.value);

		state.diceAmount = 6;
		state.rounds.forEach(
			(round) => (state.diceAmount += round.decision !== undefined ? round.decision : 0)
		);
	}

	function handleEvent(index: number, event: CustomEvent): void {
		console.log(index, event.detail); // TODO
	}
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life</h2>

<div class="container">
	{#each Array(state.diceAmount >= 0 ? state.diceAmount : 0) as _, index (index)}
		<Dice bind:this={state.dices[index]} />
	{/each}
</div>
<button on:click|preventDefault={rollDices}>Würfeln!</button>
<p />
<table border={1}>
	<tr>
		<th>Runde</th>
		<th>Verbleibende Arbeit & Gewinn & Kosten</th>
		<th>Vorhersage</th>
		<th>Entscheidungen</th>
		<th>Ereignis</th>
		<th>Geschaffte Arbeit</th>
	</tr>

	{#each state.rounds as round, index (index)}
		{#if index < state.maxRounds}
			<tr>
				<th>Runde {index + 1}</th>
				<td>
					<RemainingWork
						remainingWork={round.remaining}
						profit={round.profit}
						cost={round.cost}
					/></td
				>
				<td><ForecastField value={round.forecast} /></td>
				<td><ActionCard on:change={(e) => updateDices(index, e)} /></td>
				<td><EventCard {index} on:revealEvent={(e) => handleEvent(index, e)} /></td>
				<td><WorkDone /> </td>
			</tr>
		{/if}
	{/each}
</table>

<style>
	.container {
		display: flex;
	}
</style>
