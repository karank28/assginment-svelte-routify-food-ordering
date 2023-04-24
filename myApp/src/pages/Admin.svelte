<script lang="ts">
    import * as _ from "lodash";
    import suite from "../item_suite";
    import classnames from "vest/classnames";
    import { foodstore } from "../stores/FoodStore";
    import { feedbackStore } from "../stores/FeedbackStore";

    import Input from "../ItemComponents/Input.svelte";
    import TextArea from "../ItemComponents/TextArea.svelte";
    import ButtonSubmit from "../ItemComponents/ButtonSubmit.svelte";
    import ButtonClear from "../ItemComponents/ButtonClear.svelte";
    import InputFile from "../ItemComponents/InputFile.svelte";

    let itemformState: {
        item_img?;
        item_name?: string;
        description?: string;
        price?: string;
    } = {};

    let result = suite.get();

    const handleChange = (item_name) => {
        result = suite(itemformState, item_name);
    };

    function handleChangeImg(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files && input.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            itemformState.item_img = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    };


    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success",
    });

    $: disabled = !result.isValid();

    const initialFormState = {
        item_img:"",
        item_name: "",
        description: "",
        price: "",
    };

    const handleSubmit = () => {
        const { item_img, item_name, description, price } = itemformState;
        const newItems = { item_img, item_name, description, price };
        foodstore.update((items) => [...items, newItems]);
        window.alert("Items submitted successfully!");

        itemformState = initialFormState;
    };

    let selectedItemIndex = null;

    const handleEdit = (index) => {
        selectedItemIndex = index;
        itemformState = $foodstore[index];
    };

    const handleUpdate = () => {
        const { item_img, item_name, description, price } = itemformState;
        const updatedItem = { item_img, item_name, description, price };
        foodstore.update((items) =>
        items.map((item, index) =>
            index === selectedItemIndex ? updatedItem : item
        )
        );
        window.alert("Item updated successfully!");

        itemformState = initialFormState;
        selectedItemIndex = null;
    };

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
        foodstore.update((items) => items.filter((_, i) => i !== index));
        }
    };

</script>

<div class="w-full p-6">
    <div class="w-96 p-5 border-4 border-sky-400 rounded-2xl hover:border-amber-400 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        <form on:submit|preventDefault={handleSubmit} action="#">
            <div class="my-3">
                <InputFile
                    name="img"
                    label="Insert Image" 
                    bind:value={itemformState.item_img}
                    onInput={handleChangeImg}
                    validityclass={cn("item_image")}
                    messages={result.getErrors("item_image")}
                />
            </div>
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
                <Input
                    name="price"
                    label="Price"
                    bind:value={itemformState.price}
                    onInput={handleChange}
                    validityclass={cn("price")}
                    messages={result.getErrors("price")}
                />
            </div>

            <div class="mt-4 flex">
                {#if selectedItemIndex !== null}
                    <ButtonSubmit {disabled} on:click={handleUpdate}>Update</ButtonSubmit>
                {:else}
                    <ButtonSubmit {disabled}>Submit</ButtonSubmit>
                {/if}
                <ButtonClear>Cancel</ButtonClear>
            </div>
        </form>
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0 max-sm:hidden" />

    <div class="">
        <table class="productTable w-full text-sm text-left">
        <thead class="product_th text-lg font-semibold max-sm:text-base">
            <tr class="border-b-2 border-gray-500">
                <th scope="col" class="px-6 py-3"> Image </th>
                <th scope="col" class="px-6 py-3"> Name </th>
                <th scope="col" class="px-6 py-3"> Description </th>
                <th scope="col" class="px-6 py-3"> Price </th>
                <th scope="col" class="px-6 py-3"> Actions </th>
            </tr>
        </thead>

        <tbody>
            {#each $foodstore as item, index}
            <tr class="border-b border-gray-500 max-sm:border-b-2 max-sm:border-gray-500 max-sm:mb-12">
                <td data-th="Name" class="px-6 py-4">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={item.item_img} style="width:125px">
                </td>
                <td data-th="Name" class="px-6 py-4">
                {item.item_name}
                </td>
                <td data-th="Description" class="px-6 py-4">
                {item.description}
                </td>
                <td data-th="Price" class="px-6 py-4 max-sm:font-bold">
                ${item.price}
                </td>

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <td data-th="Actions" class="flex px-6 py-0 text-center items-center max-sm:text-base">
                    <!-- svelte-ignore missing-declaration -->
                    <div on:click={() => handleEdit(index)} class="w-12 me-1 text-2xl text-sky-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer max-sm:me-0 max-sm:text-base">
                        <i class="p-2 fa-regular fa-pen-to-square" />
                    </div>

                    <!-- svelte-ignore missing-declaration -->
                    <div on:click={() => handleDelete(index)}
                        class="w-12 text-2xl text-red-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer max-sm:text-base">
                        <i class="p-2 fa-regular fa-trash-can" />
                    </div>           
                </td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="w-full p-6">
  <p>Feedback form</p>
  <hr />
  <table class="w-full text-sm text-left">
    <thead class="text-lg font-semibold max-sm:text-base">
      <tr class="border-b-2 border-gray-500">
        <th scope="col" class="px-6 py-3 fw-bold"> Name </th>
        <th scope="col" class="px-6 py-3"> Email </th>
        <th scope="col" class="px-6 py-3"> Feedback </th>
      </tr>
    </thead>

    <tbody>
      {#each $feedbackStore as feedback}
        <tr
          class="border-b border-gray-500 max-sm:border-b-2 max-sm:border-gray-500 max-sm:mb-12"
        >
          <td data-th="Name" class="px-6 py-4">
            {feedback.name}
          </td>
          <td data-th="Description" class="px-6 py-4">
            {feedback.email}
          </td>
          <td data-th="Price" class="px-6 py-4 max-sm:font-bold">
            {feedback.feedback}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>