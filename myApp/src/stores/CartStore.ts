import { writable } from "svelte/store";

export const cartstore = writable([
    { item_id: 1, item_img: "../img/card_img1.jpg", item_name : "Gujarati Thali", description : "Gujarati Thali Description", quantity:1, price : 200 }
]);