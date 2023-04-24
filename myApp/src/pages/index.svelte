<script lang="ts">
    import * as _ from 'lodash';
    import { foodstore } from '../stores/FoodStore';

    let products:any;
    foodstore.subscribe(value => {
        products = value
    });

</script>

<div class="w-full p-6">
    
    <p>Slider</p>
    <p>Explore Taste!!</p>
    
</div>

<div class="w-full p-6">

    <div class="flex justify-between text-center">
        {#each $foodstore as item}
        <div class="w-full mx-3 p-6 border-4 border-sky-400 rounded-2xl flex flex-col flex-wrap justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400">
            <img src="{item.item_img}" alt="">
            {item.item_name}
            {item.description}
            ${item.price}
        </div>
        {/each}      
    </div>
</div>

