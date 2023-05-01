<script lang="ts">
    import * as _ from "lodash";
    import suite from "../validation/item_suite";
    import classnames from "vest/classnames";
    import { foodstore } from "../stores/FoodStore";

    import Input from "../Components/Input.svelte";
    import TextArea from "../Components/TextArea.svelte";
    import InputPrice from "../Components/InputPrice.svelte";

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let itemformState: {
        item_id? :number;
        item_img?;
        item_name?: string;
        description?: string;
        quantity?: number;
        price?: number;
        newprice?: number;
    } = {};

    let result = suite.get();

    const handleChange = (item_name) => {
        result = suite(itemformState, item_name);
    };

    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success",
    });

    $: disabled = !result.isValid();

    const initialFormState = {
        item_id: 0,
        item_name: "",
        description: "",
        price: null,
    };

    let add_item_toggle : boolean = false;   
    let update_item_toggle : boolean = false;

    function toggleForm(operation:string):void{
        
        if(operation === 'insert'){    
            add_item_toggle = !add_item_toggle
            
            itemformState = {
                item_id : 0,
                item_name: "",
                description: "",
                price: null
            }
        }

        if(operation === 'update'){
            update_item_toggle = !update_item_toggle
        }
        
    }

    function closeToggle():void {
        add_item_toggle = !add_item_toggle
        
    }
    const handleSubmit = (item) => {
        const { item_id, item_img, item_name, description, quantity, price , newprice } = itemformState;
        const newItem = { item_id, item_img, item_name, description, quantity, price , newprice };
        
        foodstore.update((items) => [...items, newItem]);
        toastr.success("Item Added successfully!");
    };

    let selectedItemIndex = null;

    const handleEdit = (index) => {
        selectedItemIndex = index;
        itemformState = $foodstore[index];
    };

    const handleUpdate = () => {
        const { item_id, item_img, item_name, description, quantity, price , newprice } = itemformState;
        const updatedItem = { item_id, item_img, item_name, description, quantity, price , newprice };
        foodstore.update((items) =>
            items.map((item, index) =>
                index === selectedItemIndex ? updatedItem : item
            )
        );
        toastr.success("Item updated successfully!");

        itemformState = initialFormState;
        selectedItemIndex = null;
    };

    const handleDelete = (index) => {
        foodstore.update((items) => items.filter((_, i) => i !== index));
        toastr.success(`Item deleted successfully!`)
    };

</script>

<div class="w-full p-6 ">
    <div class="flex justify-end z-[-1] my-3"> 
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=> toggleForm('insert')} class="w-1/4 bg-slate-700 text-white font-bold uppercase text-center py-2 px-4 rounded-lg transition cursor-pointer hover:bg-green-600 hover:text-black hover:shadow-xl max-md:w-1/2 max-sm:w-full max-sm:text-sm"><i class="fa-solid fa-plus mx-2"></i>Add new item</div> 
    </div>
</div>

<div class="w-full">
    <div class="{add_item_toggle? '':'hidden'} fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">
        <div class="w-full mt-48 flex justify-center">
            <div class="w-96 absolute bg-slate-100 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> toggleForm('insert')} class="my-1 text-end cursor-pointer text-lg">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <form on:submit|preventDefault={handleSubmit} action="#">
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <Input
                            name="item_name"
                            label="Item Name"
                            bind:value={itemformState.item_name}
                            onInput={handleChange}
                            validityclass={cn("item_name")}
                            messages={result.getErrors("item_name")}
                        />
                    </div>
    
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <TextArea
                            name="description"
                            label="Description"
                            bind:value={itemformState.description}
                            onInput={handleChange}
                            validityclass={cn("description")}
                            messages={result.getErrors("description")}
                        />
                    </div>
    
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <InputPrice
                            name="price"
                            label="Price"
                            bind:value={itemformState.price}
                            onInput={handleChange}
                            validityclass={cn("price")}
                            messages={result.getErrors("price")}
                        />
                    </div>
    
                    <div class="mt-4">
                        <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-green-600 hover:text-black hover:shadow-xl max-sm:text-sm" {disabled} on:click={closeToggle}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="{update_item_toggle? '':'hidden'} fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">
        <div class="w-full mt-48 flex justify-center">
            <div class="w-96 absolute bg-slate-100 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> toggleForm('update')} class="my-1 text-end cursor-pointer text-lg">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <form on:submit|preventDefault={handleUpdate} action="#">
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <Input
                            name="item_name"
                            label="Item Name"
                            bind:value={itemformState.item_name}
                            onInput={handleChange}
                            validityclass={cn("item_name")}
                            messages={result.getErrors("item_name")}
                        />
                    </div>
    
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <TextArea
                            name="description"
                            label="Description"
                            bind:value={itemformState.description}
                            onInput={handleChange}
                            validityclass={cn("description")}
                            messages={result.getErrors("description")}
                        />
                    </div>
    
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <InputPrice
                            name="price"
                            label="Price"
                            bind:value={itemformState.price}
                            onInput={handleChange}
                            validityclass={cn("price")}
                            messages={result.getErrors("price")}
                        />
                    </div>
    
                    <div class="mt-4 flex">
                        <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-green-600 hover:text-black hover:shadow-xl max-sm:text-sm" {disabled} on:click={()=> toggleForm('update')}>Update</button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="w-full px-6 max-lg:-mt-9">
    <hr class="h-px my-5 bg-gray-200 border-0" />
    <div class="text-3xl font-bold text-center">
        List of Items<i class="fa-solid fa-utensils mx-2"></i> 
    </div>
    <hr class="h-px my-5 bg-gray-200 border-0" />
</div>

<div class="w-full p-6 max-sm:-mt-7">
    <div class="grid justify-center items-center xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
        {#each $foodstore as item, index}
        <div class="w-full p-6 border-2 border-slate-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-pointer hover:shadow-xl hover:border-green-600">
            <form on:submit|preventDefault={() => handleSubmit(item)} action="">
                <div class="w-full">
                    <img class="object-cover h-48 w-full rounded-lg shadow-xl dark:shadow-gray-80" src="{item.item_img}" alt="">
                </div>
                <div class="h-40 p-2">
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

                <div class="flex text-center">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={()=> {toggleForm('update'), handleEdit(index)}} class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-orange-700 hover:shadow-xl max-sm:text-sm">
                        <div class="font-bold uppercase">Edit<i class="fa-regular fa-pen-to-square ms-2" /></div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => handleDelete(index)}
                        class="w-full bg-red-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-red-700 hover:shadow-xl max-sm:text-sm">
                        <div class="font-bold uppercase">Delete<i class="fa-regular fa-trash-can ms-2" /></div>
                    </div>
                </div>
            </form>
        </div>
        {/each}    
    </div>
</div>



