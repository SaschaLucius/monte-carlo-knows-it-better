<script lang="ts">
	import WorkDone from '../lib/components/WorkDone.svelte';

	import EventCard from '../lib/components/EventCard.svelte';

	import RemainingWork from '../lib/components/RemainingWork.svelte';

	import ForecastField from '../lib/components/ForecastField.svelte';

	import ActionCard from '../lib/components/ActionCard.svelte';
	import Dice from '$lib/components/Dice.svelte';

	let diceAmount = 6;
	let dices: Dice[] = [];

	function roll() {
		for (const dice of dices) {
			dice.roll();
		}
	}

	let actions: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

	function doSomething(index: number, event: Event): void {
		const target = event.target as HTMLSelectElement;
		actions[index] = parseInt(target.value);

		diceAmount = 6;
		actions.forEach((action) => (diceAmount += action));
	}
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life</h2>

<div class="container">
	{#each Array(diceAmount >= 0 ? diceAmount : 0) as _, index (index)}
		<Dice bind:this={dices[index]} />
	{/each}
</div>
<button on:click|preventDefault={roll}>Würfeln!</button>
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
	<tr>
		<th>Runde 1</th>
		<td> <RemainingWork remainingWork={50} profit={295} cost={30} /></td>
		<td> <ForecastField value={7} /></td>
		<td> <ActionCard on:change={(e) => doSomething(0, e)} /></td>
		<td><EventCard /></td>
		<td><WorkDone /> </td>
	</tr>
	<tr>
		<th>Runde 2</th>
		<td> <RemainingWork /></td>
		<td> <ForecastField /></td>
		<td> <ActionCard on:change={(e) => doSomething(1, e)} /></td>
		<td> <EventCard /></td>
		<td><WorkDone /> </td>
	</tr>
	<tr>
		<th>Runde 3</th>
		<td> <RemainingWork /></td>
		<td> <ForecastField /></td>
		<td> <ActionCard on:change={(e) => doSomething(2, e)} /></td>
		<td> <EventCard /></td>
		<td><WorkDone /> </td>
	</tr>
	<tr>
		<th>Runde 4</th>
		<td> <RemainingWork /></td>
		<td> <ForecastField /></td>
		<td> <ActionCard on:change={(e) => doSomething(3, e)} /></td>
		<td> <EventCard /></td>
		<td><WorkDone /> </td>
	</tr>
	<tr>
		<th>Runde 5</th>
		<td> <RemainingWork /></td>
		<td> <ForecastField /></td>
		<td> <ActionCard on:change={(e) => doSomething(4, e)} /></td>
		<td> <EventCard /></td>
		<td><WorkDone /> </td>
	</tr>
</table>

<style>
	.container {
		display: flex;
	}
</style>
