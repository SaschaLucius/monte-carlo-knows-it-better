<script lang="ts">
	import { config } from '$lib/stores/config';
	import { state } from '$lib/stores/state';

	// Example historical data (daily averages)

	let historicalData: number[] = [];

	$: {
		let hist: number[] = $config.historicData
			.split(',')
			.filter((x) => x.trim().length)
			.map(Number);
		let finishedWork: number[] = $state.rounds
			.map((x) => x.finishedWork)
			.filter((x) => typeof x !== 'undefined')
			.map(Number);

		historicalData = hist.concat(finishedWork);
	}

	// Set the scope and the number of simulations
	$: scope = $config.baseWork + $config.additionalWork;

	const numberOfSimulations: number = 500;

	function monteCarloLikelihoodForecast(
		historicalData: number[],
		scope: number,
		numberOfSimulations: number
	) {
		const completionTimes: number[] = [];

		for (let i = 0; i < numberOfSimulations; i++) {
			let totalItems = 0;
			let rounds = 1;

			while (totalItems < scope) {
				const randomIndex = Math.floor(Math.random() * historicalData.length);
				const dailyAverage = historicalData[randomIndex];

				totalItems += dailyAverage;
				rounds++;
			}

			completionTimes.push(rounds);
		}

		completionTimes.sort((a, b) => a - b);

		const likelihoodSteps = [
			0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8,
			0.85, 0.9, 0.95, 0.99
		];
		const results: { likelihood: number; completionTime: number }[] = [];

		likelihoodSteps.forEach((likelihood) => {
			const index = Math.floor(likelihood * numberOfSimulations);
			const completionTime = completionTimes[index];
			results.push({ likelihood: likelihood * 100, completionTime });
		});

		return results;
	}

	$: likelihoodResults = monteCarloLikelihoodForecast(historicalData, scope, numberOfSimulations);
</script>

<h2>Forecast</h2>

<p>Historical Data: {historicalData}</p>

<p>Scope left: {scope}</p>

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
