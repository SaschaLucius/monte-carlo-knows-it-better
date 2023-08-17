<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;

	function handleDelete(e: Event) {
		const target = e.target as HTMLSelectElement;
		if (target.value === '') {
			$state.rounds[index].finishedWork = undefined;
		}
	}
</script>

<input
	type="number"
	id="forecast"
	bind:value={$state.rounds[index].finishedWork}
	on:change={handleDelete}
	name="forecast"
	minlength="0"
	maxlength="2"
	size="2"
/>
