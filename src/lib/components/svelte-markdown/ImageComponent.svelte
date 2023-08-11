<script lang="ts">
	export let href = '';
	export let title = '';
	export let text = '';

	console.log(href);
</script>

<img src={href.replace('../static', '')} {title} alt={text} />

<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
