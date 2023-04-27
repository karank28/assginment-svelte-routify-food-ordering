<script lang="ts">
    import * as _ from 'lodash';
    import { foodstore } from '../stores/FoodStore';
    import { cartstore } from '../stores/CartStore';
    import { onMount } from 'svelte';

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    const handleSubmit = (item) => {
        cartstore.update((items) => [...items, item]);
        toastr.success('Added to cart successfully!')
    };

    const images = [
      "./img/banner-1.jpg",
      "./img/banner-2.jpg",
      "./img/banner-3.jpg",
      "./img/banner-4.jpg",
    ];
    
    let currentIndex = 0;
    const interval = 2000;
    
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
    }
    
    onMount(() => {
      const intervalId = setInterval(() => {
        next();
      }, interval);
      
      return () => clearInterval(intervalId);
    });

</script>

<div class="w-full relative text-center cursor-default drop-shadow-xl  ">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="object-fill h-96 w-full opacity-150" src="{images[currentIndex]}" alt="image description">
</div>

<div class="w-full p-6">
    <hr class="h-px mb-5 bg-gray-200 border-0" />
    <div class="text-3xl font-bold text-center">
        Explore the Taste<i class="fa-solid fa-utensils mx-2"></i> 
    </div>
    <hr class="h-px my-5 bg-gray-200 border-0" />
</div>

<div class="w-full p-6">
    <div class="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
        {#each $foodstore as item}
        
        <div class="w-full mx-3 p-6 border-2 border-slate-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-pointer hover:shadow-xl hover:border-green-600">
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
                    <div class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:shadow-xl max-sm:text-sm">
                        <a href="../itemdetails/?id={item.item_id}" class="">
                            <div class="font-bold">View Details<i class="fa-solid fa-circle-info mx-2"></i></div>
                        </a>
                    </div>
                    <div class="w-full">
                        <button type="submit" class="w-full bg-amber-400 text-black font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-xl max-sm:text-sm"><span>Add<i class="fa-solid fa-cart-plus mx-2"></i></span></button>
                    </div>
                </div>
            </form>   
        </div>
        {/each}    
    </div>
</div>