import { writable } from "svelte/store";

export const showMobileNav = writable(false);

export const toggleMobileNav = () => {
  showMobileNav.update((value) => !value);
};
