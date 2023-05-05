<script lang="ts">
    import * as _ from "lodash";
    import { get } from "svelte/store";
    import suite from "../validation/item_suite";
    import classnames from "vest/classnames";
    import { foodstore } from "../stores/FoodStore";
    import Input from "../Components/Input.svelte";
    import TextArea from "../Components/TextArea.svelte";
    import InputPrice from "../Components/InputPrice.svelte";
    import InputFile from "../Components/InputFile.svelte";
    import { InputImage } from "../stores/InputImageStore";
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let itemformState: {
        item_id? :number;
        item_img?: string;
        item_name?: string;
        description?: string;
        quantity?: number;
        price?: number;
    } = {};

    let result = suite.get();
    const handleChange = (item_name:any) => {
        result = suite(itemformState, item_name);
    };

    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success",
    });
    $: disabled = !result.isValid();

    let add_item_toggle : boolean = false;   
    let update_item_toggle : boolean = false;
    let delete_item_toggle : boolean = false;
    let deleteItemName: string = '';

    function toggleForm(operation:string):void{
        if(operation === 'insert'){
            itemformState = {
                item_id : 0,
                item_name: null,
                description: null,
                price: null,
            }
            disabled=true;
            add_item_toggle = !add_item_toggle
            suite.reset();
        }
        if(operation === 'update'){
            update_item_toggle = !update_item_toggle
        }
        if(operation === 'delete'){
            deleteItemName = ''
            delete_item_toggle = !delete_item_toggle;
        }
    }

    function addClose():void {
        add_item_toggle = !add_item_toggle
    }

    const handleSubmit = () => {
        const { item_id, item_img, item_name, description, quantity, price } = itemformState;
        const newItem = { item_id, item_img, item_name, description, quantity, price };
        newItem.item_img = $InputImage;
        foodstore.update((items) => [...items, newItem]);
        toastr.options.positionClass = 'toast-bottom-right'
        toastr.success(`${item_name} Added`);
    };

    let selectedItemIndex = null;
    const findEditItem = (index) => {
        selectedItemIndex = index;
        itemformState = $foodstore[index];
    };

    const handleUpdate = () => {
        const { item_id, item_img, item_name, description, quantity, price } = itemformState;
        const updatedItem = { item_id, item_img, item_name, description, quantity, price };
        updatedItem.item_img = $InputImage;
        foodstore.update((items) =>
            items.map((item, index) =>
                index === selectedItemIndex ? updatedItem : item
            )
        );
        toastr.options.positionClass = 'toast-bottom-right'
        toastr.success(`${item_name} Updated`);
        selectedItemIndex = null;
    };

    const findDeleteItem = (index) => {
        selectedItemIndex = index;
        deleteItemName = foodstore[index].item_name;
        toggleForm('delete');
    };
    
    const handleDelete = () => {
        const index = selectedItemIndex;
        const deletedItem = get(foodstore)[index];
        if (deleteItemName === deletedItem.item_name) {
            foodstore.update(items => {
                const newItems = [...items];
                newItems.splice(index, 1);
                return newItems;
            });
            toastr.options.positionClass = 'toast-bottom-right';
            toastr.success(`${deletedItem.item_name} Deleted`);
            toggleForm('delete');
        }
    };
</script>

<div class="w-full">
    <div class="flex border-y-2 justify-end z-[-1] p-4 max-md:justify-center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=> toggleForm('insert')} class="w-1/4 bg-slate-700 text-white font-bold uppercase text-center py-2 px-4 rounded-lg transition cursor-pointer hover:bg-green-600 hover:text-black hover:shadow-xl max-md:w-2/4 max-sm:w-full max-sm:text-sm">Add new item<i class="fa-solid fa-plus mx-2"></i></div> 
    </div>
</div>
<div class="w-full">
    <div class="{add_item_toggle? '':'hidden'} fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">
        <div class="w-full mt-32 flex justify-center">
            <div class="w-96 absolute bg-slate-100 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-sm:w-80">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div  class="my-1 pb-2 border-b border-slate-600">
                    <span class="flex justify-between">
                        <div class="text-xl font-bold cursor-default hover:text-green-600"><i class="fa-solid fa-plus me-2"></i>Add Item</div> 
                        <div on:click={()=> toggleForm('insert')} class="cursor-pointer hover:text-red-600"><i class="fa-solid fa-xmark"></i></div> 
                    </span>  
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
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <InputFile
                            name="item_img"
                            label="Select Image"
                            bind:value={itemformState.item_img}
                            onInput={handleChange}
                            validityclass={cn("image")}
                            messages={result.getErrors("image")}
                        />
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:text-black hover:shadow-xl max-sm:text-sm disabled:opacity-50 disabled:pointer-events-none" {disabled} on:click={addClose}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="{update_item_toggle? '':'hidden'} fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">
        <div class="w-full mt-32 flex justify-center">
            <div class="w-96 absolute bg-slate-100 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-sm:w-80">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div  class="my-1 pb-2 border-b border-slate-600">
                    <span class="flex justify-between">
                        <div class="text-xl font-bold cursor-default hover:text-green-600"><i class="fa-regular fa-pen-to-square me-2" />Update item</div> 
                        <div on:click={()=> toggleForm('update')} class="cursor-pointer hover:text-red-600"><i class="fa-solid fa-xmark"></i></div> 
                    </span>  
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
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <InputFile
                            name="item_img"
                            label="Select Image"
                            bind:value={itemformState.item_img}
                            onInput={handleChange}
                            validityclass={cn("image")}
                            messages={result.getErrors("image")}
                        />
                    </div>
                    <div class="mt-4 flex">
                        <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:text-black hover:shadow-xl max-sm:text-sm disabled:opacity-50 disabled:pointer-events-none" on:click={()=> toggleForm('update')}>Update</button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="{delete_item_toggle? '':'hidden'} fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">
        <div class="w-full mt-32 flex justify-center">
            <div class="w-96 absolute bg-slate-100 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-sm:w-80">
        
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div  class="my-1 pb-2 border-b border-slate-600">
                    <span class="flex justify-between">
                        <div class="text-xl font-bold cursor-default hover:text-green-600"><i class="fa-regular fa-trash-can me-2" />Delete item</div> 
                        <div on:click={() => toggleForm('delete')} class="cursor-pointer hover:text-red-600"><i class="fa-solid fa-xmark"></i></div> 
                    </span>  
                </div>
                <form on:submit|preventDefault={handleDelete} action="#">
                    <div class="my-3">
                        <!-- svelte-ignore missing-declaration -->
                        <Input
                            name="item_name"
                            label="Confirm name"
                            bind:value={deleteItemName}
                            validityclass={cn("item_name")}
                            messages={result.getErrors("item_name")}
                        />
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-red-600 hover:shadow-xl max-sm:text-sm">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="w-full">
    <div class="border-b-2 text-3xl font-bold text-center py-4 max-sm:text-2xl">
        <i class="fa-solid fa-utensils mx-2" />List of Items  
    </div>
</div>
<div class="w-full p-6">
    <div class="grid justify-center items-center xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
        {#each $foodstore as item, index}
            <div class="w-full p-6 border-2 border-slate-700 rounded-2xl flex-col flex-wrap justify-center items-center transition duration-400 cursor-pointer hover:shadow-xl hover:border-green-600">
                <form on:submit|preventDefault={() => handleSubmit()} action="">
                    <div class="w-full">
                        <img class="object-cover h-48 w-full border-2 border-slate-700 rounded-lg shadow-xl dark:shadow-gray-80 transition duration-200 ease-in-out hover:scale-110" src="{item.item_img}" alt="">
                    </div>
                    <div class="h-44 p-2">
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
                        <div on:click={()=> {toggleForm('update'), findEditItem(index)}} class="w-full bg-orange-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-orange-700 hover:shadow-xl max-sm:text-sm">
                            <div class="font-bold uppercase">Edit<i class="fa-regular fa-pen-to-square ms-2" /></div>
                        </div>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={() => {toggleForm('delete'), findDeleteItem(index)}}
                            class="w-full bg-red-600 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-red-700 hover:shadow-xl max-sm:text-sm">
                            <div class="font-bold uppercase">Delete<i class="fa-regular fa-trash-can ms-2" /></div>
                        </div>
                    </div>
                </form>
            </div>
        {/each}    
    </div>
</div>