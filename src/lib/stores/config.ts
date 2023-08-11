import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';

const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);
	// https://kit.svelte.dev/docs/modules#$app-environment-browser
	// true if the app is running in the browser
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	if (storedValueStr != null) store.set(JSON.parse(storedValueStr));

	store.subscribe((val) => {
		if (val == null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	});

	window.addEventListener('storage', () => {
		const storedValueStr = localStorage.getItem(key);
		if (storedValueStr == null) return;

		const localValue: T = JSON.parse(storedValueStr);
		if (localValue !== get(store)) store.set(localValue);
	});

	return store;
};

interface Auth {
	keepHeader: boolean;
	autoTagging: boolean;
	tagSearch: boolean;
	fullTextSearch: boolean;
}

export const config = storage<Auth>('config', {
	keepHeader: true,
	autoTagging: true,
	tagSearch: true,
	fullTextSearch: true
});
