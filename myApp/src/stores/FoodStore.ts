import { writable } from "svelte/store";

export const productsStore = writable([
    { p_id : 1, p_name : 'Sony TV', p_description : 'Sony TV Description', price : '50000' },
    { p_id : 2, p_name : 'Boat Headphones', p_description : 'Boat Headphones Description', price : '5000' },
    { p_id : 3, p_name : 'LG Computer', p_description : 'LG Computer Description', price : '35000' },
    { p_id : 4, p_name : 'Samsung TV', p_description : 'Samsung TV Description', price : '40000' },
    { p_id : 5, p_name : 'Iphone 7 plus', p_description : 'Iphone 7 plus Description', price : '32000' },
    
]);