<script lang="ts">
	import { config } from '$lib/stores/config';
</script>

<form class="content">
	<label>
		<input type="checkbox" bind:checked={$config.keepHeader} />
		Keep Header
	</label>
	<label>
		<input type="checkbox" bind:checked={$config.fullTextSearch} />
		Full-text search
	</label>
	<label>
		<input type="checkbox" bind:checked={$config.autoTagging} />
		Auto-Tagging
	</label>
	<label>
		<input type="checkbox" bind:checked={$config.tagSearch} />
		Tag search
	</label>
</form>

<style>
	input {
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
