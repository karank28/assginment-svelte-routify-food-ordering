<script lang="ts">
	import { goto } from "@sveltech/routify";
	import { cartCount } from '../stores/CartStore';

  	let showNavbar:boolean = false;
	function toggleNavbar():void {
	  showNavbar = !showNavbar;
	}

	let showDropdown:boolean = false;
	function toggleDropdown ():void {
    	showDropdown = !showDropdown;
  	};
	
	let item_count: number;
    cartCount.subscribe((value) => (item_count = value));
</script>

<header class="w-full fixed top-0 z-10">
	<nav class="p-2 items-center flex-wrap bg-slate-700">
		<div class="w-full flex flex-shrink-0 items-center text-white mr-6">
            <div class="w-full text-lg text-white mr-6 md:w-96 max-sm:text-lg">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={$goto('./')} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</div>
			</div>
            <div class="w-full flex justify-end max-sm:w-1/2">
                <div class="flex justify-end items-center max-lg:hidden">
                    <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                        <!-- svelte-ignore missing-declaration -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <div on:click={()=> { $goto('./') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-solid fa-house me-2"></i>Home
                        </div>
                    </div>
                    <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={()=> { $goto('./YourOrders') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-solid fa-clock-rotate-left me-2"></i>Your Orders</div>
                    </div>
                    <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={()=> { $goto('./Feedback') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-regular fa-comments me-2"></i>Feedback</div>
                    </div>
                    <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <div on:click={toggleDropdown} class="w-full text-lg font-semibold p-2"><i class="fa-regular fa-circle-user me-2"></i>Admin
                        </div>
                        {#if showDropdown}
                        <div class="w-max absolute z-10 text-black text-start border-2 border-slate-700 bg-white shadow-xl mt-10 max-lg:ml-5 -ml-20">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div on:click={()=> {$goto('./Admin'),toggleNavbar(), toggleDropdown()}}>
                                <div class="  px-4 py-2 text-lg font-bold hover:bg-amber-400 transition duration-200 ease-in-out"><i class="fa-solid fa-user-pen me-2"></i>Admin Items </div>
                            </div>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div on:click={()=> {$goto('./FeedbackResponses'),toggleNavbar(), toggleDropdown()}}>
                                <div class="  px-4 py-2 text-lg font-bold hover:bg-amber-400 transition duration-200 ease-in-out"><i class="fa-regular fa-comment-dots me-2"></i>Feedback Responses</div>
                            </div>
                        </div>
                        {/if}
                    </div>
                </div>	
                <div class="flex items-center justify-end">
                    <div class="text-white flex me-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:text-amber-400">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={ $goto('./Cart')} class="flex px-3 py-3 rounded text-lg">
                            <i class="fa-solid fa-cart-plus mr-2"></i>
                            {#if item_count > 0}
                                <span class="absolute text-sm ml-3 -mt-3 h-5 rounded-full px-2 bg-amber-400 text-black max-sm:text-xs">{item_count}</span>
                            {/if}
                        </div>
                    </div>
                    <div class="text-white block flex p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black lg:hidden">
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <button on:click={toggleNavbar} class="flex px-3 py-2 rounded">
                            <i class="fa-solid fa-bars text-lg" />
                        </button>
                    </div>
                </div>
            </div>
	  	</div>
	</nav>
    {#if showNavbar}
    <div class="w-full flex justify-end lg:hidden">
        <div class="bg-slate-700 p-1 justify-center items-center mx-2 shadow-2xl">
            <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                <!-- svelte-ignore missing-declaration -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <div on:click={()=> { $goto('./') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-solid fa-house me-2"></i>Home
                </div>
            </div>
            <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> { $goto('./YourOrders') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-solid fa-clock-rotate-left me-2"></i>Your Orders</div>
            </div>
            <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> { $goto('./Feedback') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-regular fa-comments me-2"></i>Feedback</div>
            </div>
            <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> {$goto('./Admin') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-solid fa-user-pen me-2"></i>Admin Items</div>
            </div>
            <div class="text-white flex mx-1 p-0 cursor-pointer rounded-lg transition duration-400 hover:bg-amber-400 hover:text-black">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={()=> {$goto('./FeedbackResponses') ,toggleNavbar()}} class="w-full text-lg font-semibold p-2"><i class="fa-regular fa-comment-dots me-2"></i>Feedback Responses</div>
            </div>
        </div>	
    </div>
    {/if}
</header>