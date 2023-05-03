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

    let existingItem:any ;
    const handleSubmit = (item) => {
        
        orderstore.subscribe((items) => {
            existingItem = items.find((i) => i.item_id === item.item_id);
        });

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: item.quantity,
            };
            orderstore.update((items) =>
                items.map((i) => (i.item_id === item.item_id ? updatedItem : i))
            );
            toastr.options.positionClass = 'toast-bottom-right'
            toastr.success("Already Order Confiremd!");
        }
        else {
            orderstore.update((items) => [...items, item]);
            toastr.options.positionClass = 'toast-bottom-right'
            toastr.success("Order Confiremd!");
        }

    };

    const handleDelete = (index) => {
        cartstore.update((items) => items.filter((_, i) => i !== index));
        toastr.options.positionClass = 'toast-bottom-right'
        toastr.success("Item removed from cart!")
    };
</script>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4">
        Cart list <i class="fa-solid fa-cart-plus mx-2"></i>
    </div>
</div>

<div class="w-full p-6 max-sm:p-0">
    {#if cartItems.length === 0}
    <div class="flex flex-col items-center">
         <div class="flex flex-col items-center">
        <div class="w-full">
            <img class="block mx-auto rounded-lg" src="./img/empty.png" alt="">
        </div>
        <div class="text-xl font-bold py-5">
            It's Empty!!
        </div>
    </div>   
    </div>  
    {:else}
        {#each $cartstore as item, index}
        <div class="w-full p-6 border-b-2 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="flex gap-5 max-md:flex-col">
                    
                    <div class="w-1/2 max-md:w-full">
                        <img class="object-cover h-72 w-full rounded-lg shadow-xl dark:shadow-gray-80 max-md:h-60 max-sm:h-60" src="{item.item_img}" alt="">
                    </div>

                    <div class="w-full flex flex-col">
                        <div class="h-60">
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
                                    <button type="button" on:click={()=>{ (item.quantity <=1 )? '' : item.quantity --; }}>
                                        <span class="border-2 px-2 rounded-lg">-</span>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button type="button" on:click={()=>{item.quantity++;}}>
                                        <span class="border-2 px-2 rounded-lg">+</span>
                                    </button>
                                </div>
                                
                            </div>

                            <div class="flex">
                                <div class="text-xl font-bold">
                                    Price: &nbsp;
                                </div>
                                <div class="text-lg">
                                    {item.price * item.quantity}
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
        {/each}   
    {/if} 
</div>