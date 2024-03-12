<script lang="ts">
	import { config } from '$lib/stores/config';
	import { state } from '$lib/stores/state';
	import { monteCarloLikelihoodForecast } from './forecast';

	// Example historical data (daily averages)

	export let seed: string;

	let focus: number = 100;

	let historicalData: number[] = [];

	$: {
		let hist: number[] = $config.historicData
			.split(',')
			.filter((x) => x.trim().length)
			.map(Number);
		let finishedWork: number[] = $state.rounds
			.map((x) => x.finishedWork)
			.filter((x) => x !== null)
			.map(Number);

		historicalData = hist.concat(finishedWork);
	}

	// Set the scope and the number of simulations
	$: scope = $state.rounds
		.slice()
		.reverse()
		.find((arg) => arg?.remaining !== null && arg?.remaining !== null)?.remaining;

	$: highGuess = scope;

	const numberOfSimulations: number = 500;

	$: likelihoodResults = monteCarloLikelihoodForecast(
		historicalData,
		scope,
		numberOfSimulations,
		seed,
		focus,
		highGuess
	);
</script>

<h2>Forecast</h2>

<p>Historical Data: {historicalData}</p>

<p>
	Scope left (low guess): {scope}

	<br />

	<label>
		Scope left (high guess):
		<input type="number" bind:value={highGuess} />
	</label>

	<br />

	<label>
		Fokus:
		<input type="number" bind:value={focus} />
	</label>
</p>

<table border={1}>
	<tr>
		<th>Likelihood in percentage</th>
		<th>Duration in rounds</th>
	</tr>

	{#each likelihoodResults.slice().reverse() as round, index (index)}
		<tr>
			<td>{round.likelihood}</td>
			<td>{round.completionTime}</td>
		</tr>
	{/each}
</table>
