<script lang="ts">
	export let selectedGuide = '';
	export let options: string[];
</script>

<!-- If you're using bind: directives together with on: directives, the order that they're defined in affects the value of the bound variable when the event handler is called. https://svelte.dev/docs#template-syntax-element-directives-bind-property -->
<select on:change bind:value={selectedGuide} id="select">
	{#each options as option}
		<option value={option}>{option.replaceAll('_', ' ')}</option>
	{/each}
</select>

<style>
	#select {
		border: 1px solid #f1f1f1;
		background-color: transparent;
		font-size: 3rem;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		margin: 0 auto;
		font-weight: 400;
		width: 30rem;
	}
</style>
