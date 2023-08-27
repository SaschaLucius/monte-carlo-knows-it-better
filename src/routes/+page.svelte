<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { state, DEFAULT_STATE } from '$lib/stores/state';
	let slug = (Math.random() + 1).toString(36).substring(7);
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life</h2>

<button
	on:click={() => {
		// TODO reset state unless state is bonded to slug
		state.reset();
		goto(`${base}/game/${slug}`);
	}}>New Game Press here</button
>

<style>
</style>
