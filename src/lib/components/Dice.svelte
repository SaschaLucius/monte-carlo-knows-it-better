<script lang="ts">
	export let value: number | null = null;
</script>

<p id="placeholder">{value !== null ? value : ''}</p>

<style>
	* {
		font-family: Helvetica, Arial, sans-serif;
		text-align: center;
	}
	#placeholder {
		height: 50px;
		width: 50px;
		margin: 25px auto;
		border: 1px solid gray;
		border-radius: 10px;
		font-size: 30px;
	}
</style>
