<script lang="ts">
    import * as _ from "lodash";
    import { foodstore } from '../stores/FoodStore';
    import { cartstore } from "../stores/CartStore";
    import { Routes } from "../enums/routes";

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let url = window.location.search;
    let urlData = new URLSearchParams(url)

    let id = urlData.get('id');
    let item_details=_.find($foodstore,x=>x.item_id==id)

    $: count = 1

    let fooditems;
    foodstore.subscribe(value => {
      fooditems = value;
    });

    let isAdded:boolean = false;
    let isClicked:boolean = false;
    const handleSubmit = () => {
        if(!isClicked){
            isClicked = true;
            isAdded = true;
            const quantity = { ...item_details, quantity: count };
            cartstore.update((items) => [...items,quantity]);
            toastr.options.positionClass = 'toast-bottom-right'
            toastr.success('Added to cart successfully!')
        }
    };
    
</script>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4">
        {item_details.item_name} Details
    </div>
</div>

<div class="w-full p-6 max-sm:p-0">
    <div class="p-6 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl">
        
        <form on:submit|preventDefault={() => handleSubmit()} >
            <div class="grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1">
                
                <div class="w-full">
                    <img class="object-cover h-72 w-full rounded-lg shadow-xl dark:shadow-gray-80 max-md:h-60 max-sm:h-60" src="{item_details.item_img}" alt="">
                </div>

                <div class="p-2">
                    <div class="h-60">
                        <div class="text-3xl font-bold py-1">
                            {item_details.item_name}
                        </div>
                        <div class="text-lg py-1">
                            {item_details.description}
                        </div>
    
                        <div class="flex py-1">

                            <div class="text-xl font-bold">
                                Quantity: &nbsp;
                            </div>
    
                            <div class=" text-lg py-1">
                                <button disabled={isClicked} type="button" on:click={()=>{ (count <=1 )? '' : count--; }}><span class="border-2 px-2 rounded-lg">-</span></button>
                                <span>{count}</span>
                                <button disabled={isClicked} type="button" on:click={()=>{count++;}}><span class="border-2 px-2 rounded-lg">+</span></button>
                            </div>
                            
                        </div>
                        <div class="flex">
                            <div class="text-xl font-bold">
                                Price: &nbsp;
                            </div>
                            <hr class="my-2" />
                            <div class="text-lg">
                                {item_details.price * count}
                            </div>
                        </div>
                    </div>
                
                    <div class="flex text-center uppercase">
                        <a href="{Routes.Home}" class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-orange-700 hover:shadow-xl max-sm:text-sm">
                            <div class="font-bold"><i class="fa-solid fa-angles-left me-2"></i>Menu</div>
                        </a>
                        
                        <div class="w-full">
                            <button disabled={isClicked} type="submit" class="w-full bg-amber-400 text-black font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-amber-500 hover:shadow-xl max-sm:text-sm"><span>
                                {isAdded ? 'Added' : 'Add'}<i class="fa-solid fa-cart-plus ms-2"></i></span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>