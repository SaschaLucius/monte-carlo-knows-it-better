<script lang="ts">
	import { config } from '$lib/stores/config';
</script>

<form class="content">
	<label>
		<input type="number" bind:value={$config.baseWork} />
		Basisfunktion: Aufwand
	</label>
	<label>
		<input type="number" bind:value={$config.baseProfit} />
		Basisfunktion: Gewinn
	</label>
	<label>
		<input type="number" bind:value={$config.additionalWork} />
		Zusatzfunktion: Aufwand
	</label>
	<label>
		<input type="number" bind:value={$config.additionalProfit} />
		Zusatzfunktion: Gewinn
	</label>
	<label>
		<input type="number" bind:value={$config.defaultRounds} />
		Iterationen: Anzahl
	</label>
	<label>
		<input type="number" bind:value={$config.forecastLikelihood} />
		Bevorzugte Vorhersagewahrscheinlichkeit in Prozent
	</label>
	<label>
		<input type="text" bind:value={$config.historicData} />
		Historische Daten vorangegangener Iterationen
	</label>
	<label>
		<input type="text" bind:value={$config.diceSides} />
		Würfel Werte (Entwickler Durchsatz je Iteration)
	</label>
	<label>
		<input type="number" bind:value={$config.defaultDevelopers} />
		Entwickler: Anzahl
	</label>
	<label>
		<input type="number" bind:value={$config.developerCostPerRound} />
		Entwickler: Kosten je Iteration
	</label>
</form>

<style>
	input {
		border: 1px solid rgb(0, 0, 0);
		background-color: transparent;
		font-size: 3rem;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		margin: 0 auto;
		font-weight: 400;
		width: 30rem;
	}
</style>
