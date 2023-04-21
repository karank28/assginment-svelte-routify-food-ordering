<script>
    export let disabled;
</script>

<button type="submit" class="p-2 bg-sky-400 text-black" disabled={disabled}><slot /></button>