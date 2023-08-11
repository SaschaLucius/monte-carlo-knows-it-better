<script lang="ts">
	import FilterableTextBlock from './FilterableTextBlock.svelte';

	export let searchTerm = '';
	export let textBlocks: string[];
</script>

{#each textBlocks as block}
	<FilterableTextBlock filter={searchTerm} {block} />
{/each}
