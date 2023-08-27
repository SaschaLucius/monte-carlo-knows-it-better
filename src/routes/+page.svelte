<script lang="ts">
	import { base } from '$app/paths';
	let slug = (Math.random() + 1).toString(36).substring(7);
</script>

<svelte:head>
	<title>Monte Carlo knows it better</title>
	<meta name="description" content="Monte Carlo knows it better" />
</svelte:head>

<h1>Monte Carlo knows it better</h1>

<h2>Game of developers life</h2>

<a href="{base}/game/{slug}">New Game Press here</a>

<style>
</style>
