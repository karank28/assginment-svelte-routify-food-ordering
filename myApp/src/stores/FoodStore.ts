import { writable } from "svelte/store";

export const foodstore = writable([
    { item_id: 1, item_img: "../img/img1.jpg", item_name : "Gujarati Thali", description : "A traditional meal consisting of various dishes like roti, dal, kadhi, vegetables, rice, and sweets.", quantity : 1 ,price : 200},
    { item_id: 2, item_img: "../img/img2.jpeg", item_name : "Punjabi Thali", description : 'A meal consisting of dishes like makki ki roti, sarson ka saag, chole, and lassi, which are popular in Punjabi cuisine.', quantity : 1 ,price : 250},
    { item_id: 3, item_img: "../img/img3.jpeg", item_name : "Rajashthani Thali", description : "A meal consisting of dishes like dal baati churma, gatte ki sabzi, and papad, which are popular in Rajasthani cuisine.", quantity : 1 ,price : 250},
    { item_id: 4, item_img: "../img/img4.jpeg", item_name : "Kathiywadi Thali", description : "A meal consisting of dishes like bhakri, thepla, ringan no olo, and shrikhand, which are popular in Kathiyawadi cuisine.", quantity : 1 ,price : 200},
    { item_id: 5, item_img: "../img/img5.png", item_name : "McVeggie Burger", description : "A vegetarian burger from McDonald's, which served with lettuce, cheese, and mayonnaise.", quantity : 1 ,price : 239},
    { item_id: 6, item_img: "../img/img6.jpeg", item_name : "McAloo Tikki Burger", description : "A vegetarian burger from McDonald's, which served with lettuce, cheese and mayonnaise.", quantity : 1 ,price : 179},
    { item_id: 7, item_img: "../img/img7.jpeg", item_name : "Classic Meal", description : "A meal consisting of a burger, fries, and a drink, which is a classic combination in fast food restaurants.", quantity : 1 ,price : 400},
    { item_id: 8, item_img: "../img/img8.jpg", item_name : "Margherita Pizza", description : "A pizza that consists of a tomato sauce base, mozzarella cheese, and fresh basil leaves.", quantity : 1 ,price : 400},
    { item_id: 9, item_img: "../img/img9.jpg", item_name : "Farm Villa Pizza", description : "A pizza that consists of toppings like bell peppers, onions, mushrooms, olives, and mozzarella cheese.", quantity : 1 ,price : 400},
    { item_id: 10, item_img: "../img/img10.jpg", item_name : "Double Cheese Margherita", description : " A pizza that consists of a tomato sauce base, double the amount of mozzarella cheese, and fresh basil leaves.", quantity : 1 ,price : 551},
    { item_id: 11, item_img: "../img/img11.jpg", item_name : "Cheezy-7-Pizza", description : "A pizza that consists of seven different types of cheeses and a tomato sauce base.", quantity : 1 ,price : 600},
    { item_id: 12, item_img: "../img/img12.jpg", item_name : "English Retreat Pizza", description : "A pizza that consists of toppings like roasted chicken, onions, bell peppers, and mozzarella cheese.", quantity : 1 ,price : 700},
    { item_id: 13, item_img: "../img/img13.jpg", item_name : "Masala Dhosa", description : "South Indian dish-filled with a spicy onion-potato mixture and served with coconut chutney and sambar.", quantity : 1 ,price : 250},
    { item_id: 14, item_img: "../img/img14.jpg", item_name : "Mysore Dosa", description : 'South Indian dish-filled with a spicy onion-potato mixture and served with coconut chutney and sambar.', quantity : 1 ,price : 300},
    { item_id: 15, item_img: "../img/img15.jpg", item_name : "Alfredo Pasta", description : "An Italian dish consisting of pasta, creamy white sauce made of butter, cream, and parmesan cheese.", quantity : 1 ,price : 300},
    { item_id: 16, item_img: "../img/img16.jpg", item_name : "Macaroni Pasta", description : 'A pasta dish made of elbow-shaped pasta, often served with a cheese or tomato-based sauce.', quantity : 1 ,price : 300},
    { item_id: 17, item_img: "../img/img17.jpg", item_name : "Pav-bhaji", description : " A popular street food from Mumbai, consisting of a spicy vegetable curry served with a soft bread roll.", quantity : 1 ,price : 250},
    { item_id: 18, item_img: "../img/img18.jpg", item_name : "Noodles", description : "A dish made of thin, long strips of pasta, often stir-fried with vegetables, chicken, or shrimp.", quantity : 1 ,price : 150},
    { item_id: 19, item_img: "../img/img19.jpg", item_name : "Maggie", description : "Maggie Description", quantity : 1 ,price : 100},
    { item_id: 20, item_img: "../img/img20.jpg", item_name : "Veg Cheese Sandwich", description : "A sandwich made with slices of vegetables and cheese, often served grilled or toasted.", quantity : 1 ,price : 200},
    { item_id: 21, item_img: "../img/img21.jpg", item_name : "Manchurian", description : "A popular Indo-Chinese dish consisting of fried vegetable or meat balls, served in a spicy gravy.", quantity : 1 ,price : 150},
    { item_id: 22, item_img: "../img/img22.jpg", item_name : "Panner chilly", description : "An Indo-Chinese dish made of chunks of paneer, marinated in spices and fried, and served in a spicy gravy.", quantity : 1 ,price : 300},
    { item_id: 23, item_img: "../img/img23.jpg", item_name : "Ice-cream - Family Pack", description : "A pack of ice cream designed for families, usually containing multiple flavors and servings.", quantity : 1 ,price : 270},
    { item_id: 24, item_img: "../img/img24.jpg", item_name : "Chocolate Icecream", description : " A creamy frozen dessert made of chocolate-flavored milk, cream, and sugar.", quantity : 1 ,price : 200},
    { item_id: 25, item_img: "../img/img25.jpg", item_name : "Brownie", description : " A dessert that is usually chocolate-based, with a dense and moist texture", quantity : 1 ,price : 150}
]);

