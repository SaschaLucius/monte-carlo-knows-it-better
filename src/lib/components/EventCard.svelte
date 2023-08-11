<script lang="ts">
	let text = 'Aufdecken';

	let events = [
		'+2 Runden mehr Zeit',
		'Scope Basisfunktion +2',
		'Scope Basisfunktion +4',
		'Durchsatz +2 für diese Runde',
		'+25k Kosten'
	];

	export function reveal() {
		let result = Math.floor(Math.random() * events.length);

		text = events[result];
	}
</script>

<button on:click|once={reveal}>{text}</button>
