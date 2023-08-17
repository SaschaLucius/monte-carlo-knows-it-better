<script lang="ts">
	import { config } from '$lib/stores/config';
	import { state } from '$lib/stores/state';
	import type { State } from '$lib/stores/state';
	import Forecast from '$lib/components/Forecast.svelte';
	import WorkDone from '$lib/components/WorkDone.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import RemainingWork from '$lib/components/RemainingWork.svelte';
	import ForecastField from '$lib/components/ForecastField.svelte';
	import ActionCard from '$lib/components/ActionCard.svelte';
	import Dice from '$lib/components/Dice.svelte';
	import { onMount } from 'svelte';
	import { io } from 'socket.io-client';

	const socket = io();
	socket.on('stateChanged', (newState: State) => {
		$state = newState;
	});

	// send message to server if state changes
	$: socket.emit('stateChanged', $state, new Date().toISOString());

	let dices: Dice[] = [];

	onMount(() => {
		$state.diceAmount = $config.defaultDevelopers;
		$state.maxRounds = $config.defaultRounds;
		$state.rounds[0].remaining = $config.baseWork + $config.additionalWork;
		$state.rounds[0].profit = $config.baseProfit + $config.additionalProfit;
		$state.rounds[0].cost = $config.defaultDevelopers * $config.developerCostPerRound;
		// $config.forecastLikelihood;
		// $config.historicData;
		// $config.developerCostPerRound;
	});

	function rollDices() {
		for (const [index, dice] of dices.entries()) {
			dice.roll();
		}
	}
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life</h2>

<div class="container">
	{#each Array($state.diceAmount >= 0 ? $state.diceAmount : 0) as _, index (index)}
		<Dice {index} bind:this={dices[index]} />
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

	{#each $state.rounds as round, index (index)}
		{#if index < $state.maxRounds}
			<tr>
				<th>Runde {index + 1}</th>
				<td><RemainingWork {index} /></td>
				<td><ForecastField {index} /></td>
				<td><ActionCard {index} /></td>
				<td><EventCard {index} /></td>
				<td><WorkDone {index} /> </td>
			</tr>
		{/if}
	{/each}
</table>

<Forecast />

<style>
	.container {
		display: flex;
	}
</style>
