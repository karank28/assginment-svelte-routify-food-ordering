import { writable } from "svelte/store";

export const cartstore = writable([
]);

export const cartCount = (() => {
    const { subscribe, set, update } = writable(0);
    const count = () => {
      let total = 0;
      cartstore.subscribe((items) => {
        total = items.length;
        set(total);
      });
      return {
        subscribe,
      };
    };
  
    return count();
})();
  