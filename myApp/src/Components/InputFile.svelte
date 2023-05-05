<script lang="ts">
    import { handleFileInput } from "../stores/InputImageStore";
    export let value = null;
    export let label = null;
    export let name = null
    export let pending = false;
    export let messages = [];
    export let validityclass;
    export let onInput = (e) => {};
    let image;
</script>

<div class:pending class={`${validityclass} form-input`}>
    <label for={name} class="block mb-2 text-sm font-medium text-gray-900"> 
        <p class="block p-1 text-base">{label}</p>
    </label>
    <input accept="image/x-png,image/gif,image/jpeg,image/webp" type="file" {name} bind:value
     bind:files={image} 
    on:change={()=>{ onInput(name) , handleFileInput(image)}}
    class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm"/> 
    {#if messages.length}
        <p class="text-red-500 msg-error">{messages[0]}</p>
    {/if}
</div>