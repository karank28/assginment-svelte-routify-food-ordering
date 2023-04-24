import { writable } from "svelte/store";

export const foodstore = writable([
    { item_img: "../img/card_img1.jpg", item_name : "Sony TV", description : "Sony TV Description", price : '50000' },
    { item_img: "../img/card_img2.jpg", item_name : 'Boat Headphones', description : 'Boat Headphones Description', price : '5000' },
    { item_img: "../img/card_img1.jpg", item_name : 'LG Computer', description : 'LG Computer Description', price : '35000' }
]);