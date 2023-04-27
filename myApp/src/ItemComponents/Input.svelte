<script lang="ts">
    export let value = "";
    export let label = "";
    export let name ="";
    export let pending = false;
    export let messages = [];
    export let validityclass;
    export let onInput = (e) => {};
</script>

<div class:pending class={`${validityclass} form-input`}>
    <label for={name}>
        <p class="block p-1 text-lg max-sm:text-base">{label}</p>
    </label>
    <input {name} bind:value on:input={() => onInput(name)} class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-green-600 focus:outline-green-500 hover:shadow-xl focus:shadow-xl max-sm:text-sm">
    {#if messages.length}
        <p class="text-xs validation-message text-red-500">{messages[0]}</p>
    {/if}
</div>