<script lang="ts">
    import * as _ from "lodash";
    import { orderstore } from "../stores/OrderStore";

    let orderItems;
    orderstore.subscribe(value => {
      orderItems = value;
    });

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to cancel order?")) {
            orderstore.update((items) => items.filter((_, i) => i !== index));
        }
    };
</script>

<div class="w-full p-6">

    <div class="text-3xl font-bold text-center">
        Your Orders!!
        <!-- <i class="fa-solid fa-list-check mx-2"></i> -->
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0" />
    
    {#if orderItems.length === 0}
        <div class="text-xl font-bold text-center py-5">
            Empty!!
        </div>
    {:else}
    <hr class="h-px my-5 bg-gray-200 border-0" />

        {#each $orderstore as item, index}
            <div class="w-full mb-2 p-6 border-4 border-sky-400 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
                <form action="">
                    <div class="w-full grid grid-flow-col text-center">
                        
                        <div class="flex text-start">
                            
                            <img class="object-cover w-40 h-20 rounded-lg shadow-xl dark:shadow-gray-80" src="{item.item_img}" alt="">
                            
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

                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="px-2 flex items-center">
                            <div on:click={() => handleDelete(index)}
                                class="w-full bg-red-600 rounded-lg text-xl text-white font-bold p-2 cursor-pointer">
                                <i class="p-2 fa-regular fa-trash-can" />
                                <span>Cancel Order</span>
                            </div>
                        </div>
                        
                    </div>  
                </form>
            </div>
        {/each}
    {/if}
</div>