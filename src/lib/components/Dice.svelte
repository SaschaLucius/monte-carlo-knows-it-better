<script lang="ts">
	import { state } from '$lib/stores/state';
	import { config } from '$lib/stores/config';
	export let index: number;
	let value: number | undefined = undefined;

	$: values = $config.diceSides
		.split(',')
		.filter((x) => x.trim().length)
		.map(Number);

	export function roll(): void {
		let result = Math.floor(Math.random() * values.length) + 1;
		value = values[result];
		$state.dices[index] = value;
	}
</script>

<p id="placeholder">{value !== undefined ? value : ''}</p>

<style>
	* {
		font-family: Helvetica, Arial, sans-serif;
		text-align: center;
	}
	#placeholder {
		height: 50px;
		width: 50px;
		margin: 25px auto;
		border: 1px solid gray;
		border-radius: 10px;
		font-size: 30px;
	}
</style>
