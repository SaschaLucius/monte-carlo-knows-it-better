<script lang="ts">
	import { config } from '$lib/stores/config';
	import { state } from '$lib/stores/state';
	import Dice from '$lib/components/Dice.svelte';

	$: values = $config.diceSides
		.split(',')
		.filter((x) => x.trim().length)
		.map(Number);

	function rollDices() {
		let dices: number[] = Array($state.diceAmount);

		for (var i = 0; i < $state.diceAmount; i++) {
			dices[i] = values[Math.floor(Math.random() * values.length)];
		}
		$state.dices = dices;
	}
</script>

<div class="container">
	{#each Array($state.diceAmount >= 0 ? $state.diceAmount : 0) as _, index (index)}
		<Dice bind:value={$state.dices[index]} />
	{/each}
</div>
<button on:click|preventDefault={rollDices}>Würfeln!</button>

<style>
	.container {
		display: flex;
	}
</style>
