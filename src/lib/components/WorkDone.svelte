<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;
</script>

<input
	type="number"
	id="forecast"
	bind:value={$state.rounds[index].finishedWork}
	name="forecast"
	required
	minlength="0"
	maxlength="2"
	size="2"
/>
