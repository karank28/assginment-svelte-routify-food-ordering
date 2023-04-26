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
        Explore the Taste!!
    </div>
    
    <hr class="h-px my-5 bg-gray-200 border-0" />

</div>

<div class="w-full p-6">
    <div class="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
        {#each $foodstore as item}
        <div class="w-full mx-3 p-6 border-4 border-red-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="w-full">
                    <img class="object-cover h-48 w-full rounded-lg shadow-xl dark:shadow-gray-80" src="{item.item_img}" alt="">
                </div>
                <div class="h-40 p-2">
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
                <div class="flex text-center">
                    <div class="w-full bg-red-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer  hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm">
                        <a href="../itemdetails/?id={item.item_id}" class="">
                            <div class="font-bold">View Details<i class="fa-solid fa-circle-info mx-2"></i></div>
                        </a>
                    </div>
                    <div class="w-full">
                        <Addtocart>
                            <span>Add<i class="fa-solid fa-cart-plus mx-2"></i></span>
                        </Addtocart>
                    </div>
                </div>
                
                
            </form>
        </div>
        {/each}    
    </div>
</div>

