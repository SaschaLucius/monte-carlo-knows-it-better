<script lang="ts">
	import Dices from '$lib/components/Dices.svelte';
	import { page } from '$app/stores';
	import { config } from '$lib/stores/config';
	import { state } from '$lib/stores/state';
	import type { State } from '$lib/stores/state';
	import Forecast from '$lib/components/Forecast.svelte';
	import WorkDone from '$lib/components/WorkDone.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import RemainingWork from '$lib/components/RemainingWork.svelte';
	import ForecastField from '$lib/components/ForecastField.svelte';
	import ActionCard from '$lib/components/ActionCard.svelte';
	import { onMount } from 'svelte';
	import { io } from '$lib/socket';

	onMount(() => {
		$state.diceAmount = $config.defaultDevelopers;
		$state.maxRounds = $config.defaultRounds;
		$state.rounds[0].remaining = $config.baseWork + $config.additionalWork;
		$state.rounds[0].profit = $config.baseProfit + $config.additionalProfit;
		$state.rounds[0].cost = $config.defaultDevelopers * $config.developerCostPerRound;
		// $config.forecastLikelihood;
		// $config.historicData;
		// $config.developerCostPerRound;

		io.connect();

		if (io.connected) {
			io.on('connect', () => {
				console.log('Connection established:', io.id);
			});

			io.on('disconnect', (reason) => {
				console.log('Connection closed:', io.id, reason);
			});

			io.on('stateChanged', (newState: State) => {
				console.log('State Changed:', io.id, newState);
				$state = newState;
			});
		} else {
			console.log('not connected');
		}
	});

	// send message to server if state changes
	$: {
		if (io.connected) {
			console.log('Emit state changed');
			io.emit('stateChanged', $state, new Date().toISOString());
		} else {
			console.log('Socket not connected to emit state change');
		}
	}
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life '{$page.params.slug}'</h2>

<Dices />

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

<Forecast bind:seed={$page.params.slug} />

<style>
</style>
