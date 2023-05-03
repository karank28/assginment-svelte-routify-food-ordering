<script lang="ts">
    import * as _ from 'lodash';
    import { foodstore } from '../stores/FoodStore';
    import { cartstore } from '../stores/CartStore';
    import { onMount } from 'svelte';

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let existingItem:any ;
    const handleSubmit = (item) => {
        cartstore.subscribe((items) => {
            existingItem = items.find((i) => i.item_id === item.item_id);
        });

        if (existingItem) {
            const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
            };

            cartstore.update((items) =>
            items.map((i) => (i.item_id === item.item_id ? updatedItem : i))
            );

        } else {
            const newItem = {
            ...item,
            quantity: 1,
            };
            cartstore.update((items) => [...items, newItem]);
        }
        toastr.options.positionClass = 'toast-bottom-right'
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

<div class="w-full relative text-center cursor-default drop-shadow-xl">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="object-fill h-96 w-full opacity-150 max-lg:h-64 max-md:h-48 max-sm:h-32 " src="{images[currentIndex]}" alt="image description">
</div>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4">
        <i class="fa-solid fa-utensils mx-2" />Explore the Taste
    </div>
</div>

<div class="w-full p-6">
    <div class="grid justify-center items-center xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
        {#each $foodstore as item}
        
        <div class="w-full p-6 border-2 border-slate-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 hover:shadow-xl hover:border-green-600">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="w-full">
                    <img class="object-cover h-48 w-full border-2 border-slate-700 rounded-lg shadow-xl dark:shadow-gray-80 transition duration-200 ease-in-out hover:scale-110" src="{item.item_img}" alt="">
                </div>
                <div class="h-44 p-2">
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
                <div class="flex text-center uppercase">
                    <div class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-orange-700 hover:shadow-xl max-sm:text-sm">
                        <a href="../itemdetails/?id={item.item_id}" class="">
                            <span>Details<i class="fa-solid fa-circle-info ms-2"></i></span>
                        </a>
                    </div>
                    <div class="w-full">
                        <button type="submit" class="w-full bg-amber-400 text-black font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-amber-500 hover:shadow-xl max-sm:text-sm">
                            <span>Add<i class="fa-solid fa-cart-plus ms-2"></i></span>
                        </button>
                    </div>
                </div>
            </form>   
        </div>
        {/each}    
    </div>
</div>