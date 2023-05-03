<script lang="ts">
    import * as _ from "lodash";
    import { orderstore } from "../stores/OrderStore";

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let orderItems;
    orderstore.subscribe(value => {
        orderItems = value;
    });

    const handleDelete = (index) => {
        orderstore.update((items) => items.filter((_, i) => i !== index));
        toastr.options.positionClass = 'toast-bottom-right'
        toastr.success("Item removed from cart!")
    };

</script>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4">
        <i class="fa-solid fa-clock-rotate-left mx-2" />Your Orders
    </div>
</div>

<div class="w-full p-6 max-sm:p-0">
    {#if orderItems.length === 0}
    <div class="flex flex-col items-center">
        <div class="w-full">
            <img class="block mx-auto rounded-lg" src="./img/empty.png" alt="">
        </div>
        <div class="text-xl font-bold py-5">
            It's Empty!!
        </div>
    </div>      
        
    {:else}
        {#each $orderstore as item, index}
            <div class="w-full p-6 border-b-2 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl">
                <form action="">
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
                                        {item.quantity}
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
                            
                            <div class="w-1/2 flex text-center max-md:w-full max-sm:w-full">
                                <div class="w-full mx-1 max-sm:mx-0">
                                    <button on:click={() => handleDelete(index)} 
                                        class="w-full bg-red-600 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-red-700 hover:text-white hover:shadow-xl max-sm:text-sm">
                                        <i class="fa-regular fa-trash-can ms-2" />
                                        <span>Cancel order</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </form>
            </div>
        {/each}
    {/if}
</div>