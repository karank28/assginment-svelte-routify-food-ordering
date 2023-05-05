import { writable } from 'svelte/store';

export const InputImage = writable(null as string);

export function handleFileInput(image){
    let reader = new FileReader();
    reader.readAsDataURL(image[0]);
    reader.addEventListener("load",function (){
        InputImage.update(f => reader.result as string)
    });
}
