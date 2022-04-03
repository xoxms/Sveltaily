import { browser } from '$app/env';
import { writable } from 'svelte/store';

const storage = browser ? JSON.parse(window.localStorage['sveltaily'] || '{}') || {} : {};

function storeSettings() {
  if (browser) {
    window.localStorage['sveltaily'] = JSON.stringify(storage);
  }
}

export const modal = writable(storage.modal ?? false);
export const darkTheme = writable(storage.darkTheme ?? false);

modal.subscribe((value) => {
  storage.modal = value;
  storeSettings();
});

darkTheme.subscribe((value) => {
  storage.darkTheme = value;
  storeSettings();
});
