import { derived, writable } from 'svelte/store';

function createStringSetStore() {
	const { subscribe, set, update } = writable(new Set<string>());

	return {
		subscribe,
		add: (item: string) => update((n) => n.add(item)),
		reset: () => set(new Set<string>())
	};
}

export const tags_store = createStringSetStore();
export const sorted_tags_store = derived(tags_store, (tags) =>
	Array.from(tags).sort((a, b) => a.localeCompare(b))
);
