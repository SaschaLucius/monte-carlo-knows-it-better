<script lang="ts">
	export let remainingWork: number | undefined = undefined;
	export let profit: number | undefined = undefined;
	export let cost: number | undefined = undefined;
</script>

<div>
	<input bind:value={remainingWork} type="number" id="remainingWork" name="remainingWork" />
	&
	<input bind:value={profit} type="number" id="profit" name="profit" />
	&
	<input bind:value={cost} type="number" id="cost" name="cost" />
</div>

<style>
	div {
		margin: center;
		text-align: center;
	}
	input {
		width: 90px;
	}
</style>
