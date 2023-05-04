<script lang="ts">
	import { Routes } from "../enums/routes";
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
	<nav class="items-center justify-between flex-wrap bg-slate-700">
		<div class="w-full flex flex-shrink-0 items-center text-white mr-6 justify-between lg:hidden">
			<div class="text-xl p-3 text-white mr-6 max-sm:text-lg max-sm:pe-0">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={$goto('./')} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-end">
				<div class="block p-3 transition-all max-lg:-me-4">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={$goto('./Cart')} class="flex px-3 py-3 rounded text-xl text-white hover:text-amber-400 hover:border-amber-400 transition-all">
						<i class="fa-solid fa-cart-plus mx-2"></i>
						{#if item_count > 0}
							<span class="absolute text-sm ml-5 -mt-3 h-5 rounded-full px-2 bg-amber-400 text-black max-sm:text-xs">{item_count}</span>
						{/if}
					</div>
				</div>

				<div class="block p-3 transition-all">
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<button on:click={toggleNavbar} class="flex px-3 py-2 rounded text-white hover:text-amber-400 hover:border-amber-400 transition-all">
						<i class="fa-solid fa-bars text-xl"><title>Menu</title></i>
					</button>
				</div>
			</div>
	  	</div>
	  
		<div class="{showNavbar? 'block': 'hidden'} w-full block lg:text-center flex-grow lg:flex lg:items-center p-0 -mt-3 lg:mt-0" id="Menu">
			<div class="w-full text-xl p-3 text-white mr-6 md:w-96 max-lg:hidden max-sm:text-lg">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={$goto('./')} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</div>
			</div>
			
			<div class="w-full lg:flex justify-end items-center ">
			
				<div class="flex p-0 cursor-pointer">
					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<div on:click={()=> { $goto('./') ,toggleNavbar()}} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 hover:text-amber-400 max-lg:ml-3"><i class="fa-solid fa-house me-2"></i>Home</div>
					</div>

				<div class="flex p-0 cursor-pointer">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={()=> { $goto('./YourOrders') ,toggleNavbar()}} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 hover:text-amber-400 max-lg:ml-3"><i class="fa-solid fa-clock-rotate-left me-2"></i>Your Orders</div>
				</div>

				<div class="flex p-0 cursor-pointer">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={()=> { $goto('./Feedback') ,toggleNavbar()}} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 hover:text-amber-400 max-lg:ml-3"><i class="fa-regular fa-comments me-2"></i>Feedback</div>
				</div>
			
				<div class="relative flex p-0 cursor-pointer">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<div on:click={toggleDropdown} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 hover:text-amber-400 max-lg:ml-3"><i class="fa-regular fa-circle-user me-2"></i>Admin
					</div>

					{#if showDropdown}
					<div class="w-max absolute z-10 text-start border-2 border-slate-700 bg-white shadow-xl mt-10 max-lg:ml-5 -ml-20">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={()=> {$goto('./Admin'),toggleNavbar(), toggleDropdown()}}>
							<div class="block px-4 py-2 text-lg font-bold hover:bg-amber-400 transition duration-200 ease-in-out"><i class="fa-solid fa-user-pen me-2"></i>Admin Items </div>
						</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={()=> {$goto('./FeedbackResponses'),toggleNavbar(), toggleDropdown()}}>
							<div class="block px-4 py-2 text-lg font-bold hover:bg-amber-400 transition duration-200 ease-in-out"><i class="fa-regular fa-comment-dots me-2"></i>Feedback Responses</div>
						</div>
					</div>
					{/if}
				</div>

				<div class="flex items-center justify-end max-lg:hidden">
					<div class="p-3 transition-all max-lg:-me-4">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={ $goto('./Cart')} class="flex px-3 py-3 rounded text-xl text-white hover:text-amber-400 hover:border-amber-400 transition-all cursor-pointer">
							<i class="fa-solid fa-cart-plus mx-2"></i>
							{#if item_count > 0}
								<span class="absolute text-sm ml-5 -mt-3 h-5 rounded-full px-2 bg-amber-400 text-black max-sm:text-xs">{item_count}</span>
							{/if}
						</div>
					</div>
				</div>
			</div>
	  	</div>
	</nav>
</header>