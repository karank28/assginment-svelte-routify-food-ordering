import { writable } from "svelte/store";

export const feedbackStore = writable([
    {name:"Palak" , email:"palak@gmail.com", feedback:"abcd"},
    {name:"Kevin" , email:"kevin@gmail.com", feedback:"abcd"},
    {name:"Bharti" , email:"bharti@gmail.com", feedback:"abcd"}
]);