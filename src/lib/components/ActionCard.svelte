<script lang="ts">
	export let amount = 0;
</script>

<select bind:value={amount} on:change>
	<option value="0">Keine</option>
	<option value="1">+1 MA</option>
	<option value="2">+2 MA</option>
	<option value="3">+3 MA</option>
	<option value="-1">-1 MA</option>
	<option value="-2">-2 MA</option>
	<option value="-3">-3 MA</option>
</select>
