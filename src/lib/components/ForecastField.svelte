<script lang="ts">
	export let value: number | undefined = undefined;
</script>

<input bind:value type="number" id="forecast" name="forecast" />

<style>
	input {
		text-align: center;
	}
</style>
