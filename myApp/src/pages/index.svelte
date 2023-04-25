<script lang="ts">
    import * as _ from 'lodash';
    import { foodstore } from '../stores/FoodStore';
    import Addtocart from '../ItemComponents/Addtocart.svelte';
    import { cartstore } from '../stores/CartStore';

    const handleSubmit = (item) => {
        cartstore.update((items) => [...items, item]);
        window.alert("Added to cart successfully!");
    };

</script>

<div class="w-full p-6">
    
    <p>Slider</p>

    <hr class="h-px my-5 bg-gray-200 border-0" />

    <div class="text-3xl font-bold text-center">
        List of Items
    </div>
    
    <hr class="h-px my-5 bg-gray-200 border-0" />

</div>

<div class="w-full p-6">
    <div class="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
        {#each $foodstore as item}
        <div class="w-full mx-3 p-6 border-4 border-sky-400 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div>
                    <img src="{item.item_img}" alt="" style="width: 100px;">
                </div>
                <div class="h-48 p-2">
                    <div class="text-xl font-bold py-1">
                        {item.item_name}
                    </div>
                    <div class="py-1">
                        {item.description}
                    </div>
                    <div class="flex py-1">
                        <div class="font-bold">Price:&nbsp;</div>{item.price}
                    </div>
                </div>
                <div class="inset-x-0 bottom-0">
                    <Addtocart> Add to cart </Addtocart>
                </div>
                
            </form>
        </div>
        {/each}    
    </div>
</div>

