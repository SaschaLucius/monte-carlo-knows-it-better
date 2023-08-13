<script lang="ts">
	import { config } from '$lib/stores/config';
</script>

<form class="content">
	<label>
		<input type="number" bind:value={$config.baseWork} />
		Basisfunktion Arbeit
	</label>
	<label>
		<input type="number" bind:value={$config.baseProfit} />
		Basisfunktion Gewinn
	</label>
	<label>
		<input type="number" bind:value={$config.additionalWork} />
		Zusatzfunktion Arbeit
	</label>
	<label>
		<input type="number" bind:value={$config.additionalProfit} />
		Zusatzfunktion Gewinn
	</label>
	<label>
		<input type="number" bind:value={$config.defaultRounds} />
		Runden
	</label>
	<label>
		<input type="number" bind:value={$config.defaultForecast} />
		Forecast
	</label>
	<label>
		<input type="number" bind:value={$config.defaultDevelopers} />
		Entwickler
	</label>
	<label>
		<input type="number" bind:value={$config.developerCostPerRound} />
		Entwicklerkosten je Runde
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
