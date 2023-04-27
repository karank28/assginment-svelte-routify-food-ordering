<script lang="ts">
    import * as _ from "lodash";
    import { cartstore } from '../stores/CartStore';
    import { orderstore } from "../stores/OrderStore";

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let cartItems;
    cartstore.subscribe(value => {
      cartItems = value;
    });

    const handleSubmit = (item) => {
        orderstore.update((items) => [...items, item]);
        toastr.success("Order Confiremd!");
    };

    const handleDelete = (index) => {
        cartstore.update((items) => items.filter((_, i) => i !== index));
        toastr.success("Item removed from cart!")
    };
</script>

<div class="w-full p-6">
    <div class="text-3xl font-bold text-center">
        Cart list <i class="fa-solid fa-cart-plus mx-2"></i>
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0" />

    {#if cartItems.length === 0}
    <div class="flex flex-col items-center">
        <div class="text-xl font-bold py-5">
            Empty!!
        </div>
        <div class="w-full">
            <img class="block mx-auto rounded-lg" src="./img/empty.png" alt="">
        </div>
    </div>  
    {:else}
        {#each $cartstore as item, index}
        <div class="w-full mb-2 p-6 border-2 border-slate-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-200">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="w-full grid grid-flow-col text-center">
                    
                    <div class="flex text-start">
                        
                        <img class="object-cover w-48 h-28 rounded-lg shadow-xl dark:shadow-gray-80" src="{item.item_img}" alt="">
                        
                        <div class="mx-5">
                            <div class="text-xl font-bold py-1">{item.item_name}</div>
                            <div>{item.description}</div>
                        </div>

                    </div>
                    
                    <div class="px-2">
                        <div class="text-xl font-bold">
                            Quantity
                        </div>
                        <hr class="my-2" />
                        <div class="text-lg">
                            <span>{item.quantity}</span>
                        </div>
                        
                    </div>
                    <div class="px-2">
                        <div class="text-xl font-bold">
                            Price
                        </div>
                        <hr class="my-2" />
                        <div class="text-lg">
                            {item.newprice}
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="my-2 px-2 flex items-center">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="w-full bg-green-600 rounded-lg text-white font-bold p-2 cursor-pointer">
                                <button type="submit">
                                    <i class="fa-regular fa-circle-check p-2"></i>
                                    <span>Confirm Order</span>
                                </button>
                            </div>
                        </div>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="my-2 px-2 flex items-center">
                            <div on:click={() => handleDelete(index)}
                                class="w-full bg-red-600 rounded-lg text-white font-bold p-2 cursor-pointer">
                                <i class="p-2 fa-regular fa-trash-can" />
                                <span>Remove from cart</span>
                            </div>
                        </div>
                    </div>
                        
                </div>  
            </form>
        </div>
        <hr class="h-px my-5 bg-gray-200 border-0" />
        {/each}   
        
    {/if} 
</div>