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

    const handleSubmit = () => {
        const quantity = { ...item_details, quantity: count };
        const newPrice = count * item_details.price;
        const itemPrice = { ...quantity, newprice: newPrice };
        cartstore.update((items) => [...items, itemPrice]);
        toastr.success('Added to cart successfully!')

    };
    
</script>

<div class="w-full p-6">
    <div class="mx-3 p-6 border-2 border-slate-700 rounded-2xl justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-green-600">
        
        <form on:submit|preventDefault={() => handleSubmit()} >
            <div class="grid grid-cols-3 gap-3">
                
                <div class="">
                    <img class="object-cover h-60 w-full rounded-lg shadow-xl dark:shadow-gray-80" src="{item_details.item_img}" alt="">
                </div>

                <div class="p-2">
                    <div class="h-48">
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
                                <button type="button" on:click={()=>{ (count <=1 )? '' : count--; }}><span class="border-2 px-2 rounded-lg">-</span></button>
                                <span>{count}</span>
                                <button type="button" on:click={()=>{count++;}}><span class="border-2 px-2 rounded-lg">+</span></button>
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
                
                    <div class="flex text-center">
                        <a href="{Routes.Home}" class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:shadow-xl max-sm:text-sm">
                            <div class="font-bold"><i class="fa-solid fa-angles-left mx-1"></i>Back to Menu</div>
                        </a>
                        
                        <div class="w-full">
                            <button type="submit" class="w-full bg-amber-400 text-black font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-xl max-sm:text-sm"><span>Add<i class="fa-solid fa-cart-plus mx-2"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>