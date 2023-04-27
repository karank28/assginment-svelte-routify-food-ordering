<script lang="ts">
	import { Routes } from './enums/routes';
  
  	let showNavbar:boolean = false;
	function toggleNavbar() {
	  showNavbar = !showNavbar;
	}

	let showDropdown:boolean = false;
	function toggleDropdown () {
    	showDropdown = !showDropdown;
  	};

</script>

<header class="w-full fixed top-0 z-10">
	<nav class="items-center justify-between flex-wrap bg-slate-700">
		<div class="w-full flex flex-shrink-0 items-center text-white mr-6 justify-between">
			<div class="text-xl p-5">
				<a href={Routes.Home} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</a>
			</div>

			<div class="p-5 transition-all">
				<a href={Routes.Cart} class="flex px-3 py-2 border rounded text-white border-2 border-white hover:text-amber-400 hover:border-amber-400 transition-all">
					<i class="fa-solid fa-cart-plus mx-2"></i>
				</a>
			</div>

			<div class="block lg:hidden p-5 transition-all">
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<button on:click={toggleNavbar} class="flex px-3 py-2 border rounded text-white border-2 border-white hover:text-amber-400 hover:border-amber-400 transition-all">
					<i class="fa-solid fa-bars text-xl"><title>Menu</title></i>
				</button>
			</div>
	  	</div>
	  
		<div class="{showNavbar? 'block': 'hidden'} w-full block lg:text-center flex-grow lg:flex lg:items-center lg:w-auto p-0" id="Menu">
			
			<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
				<a href={Routes.Home} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Home</a>
				</div>

			<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
				<a href={Routes.YourOrders} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Your Orders</a>
			</div>

			<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
				<a href={Routes.Feedback} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Feedback</a>
			</div>
		
			<div class="relative inline-block dropdown flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<div class="text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5 focus:outline-none" 
				on:click={toggleDropdown}>Admin
				</div>

				{#if showDropdown}
				<div class="absolute w-full z-10 text-start border-2 border-slate-700 bg-white shadow-xl ">
					<a href={Routes.Admin} class="" on:click={toggleDropdown}>
						<div class="block px-4 py-2 text-lg font-bold hover:bg-slate-200">Admin Items</div>
					</a>
					<a href={Routes.FeedbackResponses} class="" on:click={toggleDropdown}>
						<div class="block px-4 py-2 text-lg font-bold hover:bg-slate-200">Feedback Responses</div>
					</a>
				</div>
				{/if}
			</div>
	  	</div>
	</nav>
</header>
  