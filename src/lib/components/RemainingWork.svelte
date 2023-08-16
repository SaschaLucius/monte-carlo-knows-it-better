<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;
</script>

<div>
	<input
		bind:value={$state.rounds[index].remaining}
		type="number"
		id="remainingWork"
		name="remainingWork"
	/>
	&
	<input bind:value={$state.rounds[index].profit} type="number" id="profit" name="profit" />
	&
	<input bind:value={$state.rounds[index].cost} type="number" id="cost" name="cost" />
</div>

<style>
	div {
		margin: center;
		text-align: center;
	}
	input {
		width: 90px;
	}
</style>
