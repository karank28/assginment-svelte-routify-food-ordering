<script lang="ts">
    export let disabled;
</script>

<button type="submit" class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" disabled={disabled}><slot /></button>