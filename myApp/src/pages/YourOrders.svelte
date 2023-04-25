<script lang="ts">
    import { cartstore } from '../stores/CartStore';

    function increment(index) {
        cartstore.update(items => {
        items[index].quantity++;
        items[index].price = items[index].quantity * items[index].price;
        return items;
    });
    }

    function decrement(index) {
        cartstore.update(items => {
        items[index].quantity--;
        items[index].price = items[index].quantity * items[index].price;
        return items;
    });
    }

    let cartItems;
    cartstore.subscribe(value => {
      cartItems = value;
    });

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to remove this from cart?")) {
            cartstore.update((items) => items.filter((_, i) => i !== index));
        }
    };
</script>

<div class="w-full p-6">
    {#if cartItems.length === 0}
        <div class="text-xl font-bold text-center py-5">
            Your cart is empty!!
        </div>
    {:else}
        {#each $cartstore as item, index}
        <div class="w-full mb-2 p-6 border-4 border-sky-400 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <form action="">
                <div class="grid grid-flow-col justify-stretch items-center text-center">
                    <div class="">
                        <img src="{item.item_img}" alt="" style="width: 100px;">
                    </div>
                    <div>{item.item_name}</div>
                    <div>{item.description}</div>
                    <div class="quantity-control">
                        <button type="button" on:click={()=> decrement(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" on:click={()=> increment(index)}>+</button>
                    </div>
                    <div>{item.price}</div>

                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => handleDelete(index)}
                        class="w-12 text-2xl text-red-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer max-sm:text-base">
                        <i class="p-2 fa-regular fa-trash-can" />
                    </div>
                </div>  
            </form>
        </div>
        {/each}   
    {/if} 
</div>