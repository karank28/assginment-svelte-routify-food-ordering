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

<div class="w-full p-6 max-lg:-mt-9">
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
        <div class="w-full p-6 border-2 border-slate-700 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-green-600">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="flex gap-5 max-md:flex-col">
                    
                    <div class="w-1/2 max-md:w-full">
                        <img class="object-cover h-60 w-full rounded-lg shadow-xl dark:shadow-gray-80" src="{item.item_img}" alt="">
                    </div>

                    <div class="w-full flex flex-col">
                        <div class="h-48">
                            <div class="text-3xl font-bold py-1">
                                {item.item_name}
                            </div>
                            <div class="text-lg py-1">
                                {item.description}
                            </div>
        
                            <div class="flex py-1">
        
                                <div class="text-xl font-bold">
                                    Quantity: &nbsp;
                                </div>
        
                                <div class=" text-lg py-1">
                                    {item.quantity}
                                </div>
                                
                            </div>

                            <div class="flex">
                                <div class="text-xl font-bold">
                                    Price: &nbsp;
                                </div>
                                <div class="text-lg">
                                    {item.newprice}
                                </div>
                            </div>
                        </div>

                        <div class="lg:w-1/2 flex text-center max-md:w-full max-sm:w-full">
                            <div class="w-full mx-1 max-sm:ms-0">
                                <button type="submit" 
                                class="w-full bg-green-600 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-700 hover:text-white hover:shadow-xl max-sm:text-sm">
                                    <span>Confirm</span>
                                    <i class="fa-regular fa-circle-check ms-2" />
                                </button>
                            </div>

                            <div class="w-full mx-1 max-sm:me-0">
                                <button on:click={() => handleDelete(index)} 
                                    class="w-full bg-red-600 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-red-700 hover:text-white hover:shadow-xl max-sm:text-sm">
                                    <span>Remove</span>
                                    <i class="fa-regular fa-trash-can ms-2" />
                                </button>
                            </div>  
                        </div>
                    </div>  
                </form>
            </div>
            <hr class="h-px my-5 bg-gray-200 border-0" />
        {/each}   
        
    {/if} 
</div>