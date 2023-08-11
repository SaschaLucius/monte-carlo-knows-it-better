<script lang="ts">
	var number: number;

	let sides = 6;

	export function roll() {
		let result = Math.floor(Math.random() * sides) + 1;

		switch (result) {
			case 1:
				number = 0;
				break;
			case 2:
				number = 1;
				break;
			case 3:
				number = 1;
				break;
			case 4:
				number = 2;
				break;
			case 5:
				number = 2;
				break;
			case 6:
				number = 3;
				break;
		}
	}
</script>

<p id="placeholder">{number !== undefined ? number : ''}</p>

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
