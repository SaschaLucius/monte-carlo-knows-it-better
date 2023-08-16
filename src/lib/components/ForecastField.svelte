<script lang="ts">
	import { state } from '$lib/stores/state';
	export let index: number;
</script>

<input bind:value={$state.rounds[index].forecast} type="number" id="forecast" name="forecast" />

<style>
	input {
		text-align: center;
	}
</style>
