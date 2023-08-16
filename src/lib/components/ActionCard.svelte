<script lang="ts">
	import { state } from '$lib/stores/state';
	import { config } from '$lib/stores/config';
	export let index: number;

	let placeholder = 'Select your Action!';
	let options = [
		{
			label: 'Keine',
			value: '0'
		},
		{
			label: '+1 MA',
			value: '1'
		},
		{
			label: '+2 MA',
			value: '2'
		},
		{
			label: '+3 MA',
			value: '3'
		},
		{
			label: '-1 MA',
			value: '-1'
		},
		{
			label: '-2 MA',
			value: '-2'
		},
		{
			label: '-3 MA',
			value: '-3'
		}
	];

	function updateDices(index: number, event: Event): void {
		const target = event.target as HTMLSelectElement;
		$state.rounds[index].decision = target.value;

		let diceAmount = $config.defaultDevelopers;
		$state.rounds.forEach((round) => (diceAmount += parseInt(round.decision)));

		$state.diceAmount = diceAmount;
	}
</script>

<select bind:value={$state.rounds[index].decision} on:change={(e) => updateDices(index, e)}>
	{#if placeholder}
		<option value="" disabled selected>{placeholder}</option>
	{/if}
	{#each options as option}
		<option value={option.value}>
			{option.label}
		</option>
	{/each}
</select>
