import { writable } from "svelte/store";

export const foodstore = writable([
    { item_id: 1, item_img: "../img/img1.jpg", item_name : "Gujarati Thali", description : "Gujarati Thali Description", quantity : 1 ,price : 200},
    { item_id: 2, item_img: "../img/img2.jpeg", item_name : 'Punjabi Thali', description : 'Punjabi Thali Description', quantity : 1 ,price : 250},
    { item_id: 3, item_img: "../img/img3.jpeg", item_name : 'Rajashthani Thali', description : 'Rajashthani Thali Description', quantity : 1 ,price : 250},
    { item_id: 4, item_img: "../img/img4.jpeg", item_name : 'Kathiywadi Thali', description : 'Kathiywadi Thali Description', quantity : 1 ,price : 200},
    { item_id: 5, item_img: "../img/img5.png", item_name : "McVeggie Burger", description : "McVeggie Burger Description", quantity : 1 ,price : 239},
    { item_id: 6, item_img: "../img/img6.jpeg", item_name : "McAloo Tikki Burger", description : "McAloo Tikki Burger Description", quantity : 1 ,price : 179},
    { item_id: 7, item_img: "../img/img7.jpeg", item_name : "Classic Meal", description : "Classic Meal Description", quantity : 1 ,price : 400},
    { item_id: 8, item_img: "../img/img8.jpg", item_name : "Margherita Pizza", description : "Margherita Pizza Description", quantity : 1 ,price : 400},
    { item_id: 9, item_img: "../img/img9.jpg", item_name : "Farm Villa Pizza", description : "Farm Villa Pizza Description", quantity : 1 ,price : 400, newprice : 400 },
    { item_id: 10, item_img: "../img/img10.jpg", item_name : "Double Cheese Margherita Pizza", description : "Double cheese Margherita Pizza Description", quantity : 1 ,price : 551},
    { item_id: 11, item_img: "../img/img11.jpg", item_name : "Cheezy-7-Pizza", description : "Cheezy-7-Pizza Description", quantity : 1 ,price : 600},
    { item_id: 12, item_img: "../img/img12.jpg", item_name : "English Retreat Pizza", description : "English Retreat Pizza Description", quantity : 1 ,price : 700}
]);

