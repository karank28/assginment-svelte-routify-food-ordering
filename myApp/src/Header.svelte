<script lang="ts">
	import { Routes } from './enums/routes';
	import { cartCount } from './stores/CartStore';
  
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
			<div class="text-xl p-3 text-white mr-6">
				<a href={Routes.Home} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</a>
			</div>

			<div class="flex items-center justify-end">
				<div class="block p-3 transition-all max-lg:-me-4">
					<a href={Routes.Cart} class="flex px-3 py-3 rounded text-xl text-white hover:text-amber-400 hover:border-amber-400 transition-all">
						<i class="fa-solid fa-cart-plus mx-2"></i>
						{#if item_count > 0}
							<span class="absolute text-sm ml-5 -mt-3 h-5 rounded-full px-2 bg-amber-400 text-black max-sm:text-xs">{item_count}</span>
						{/if}
					</a>
				</div>

				<div class="block p-3 transition-all">
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<button on:click={toggleNavbar} class="flex px-3 py-2 rounded text-white hover:text-amber-400 hover:border-amber-400 transition-all">
						<i class="fa-solid fa-bars text-xl"><title>Menu</title></i>
					</button>
				</div>
			</div>
	  	</div>
	  
		<div class="{showNavbar? 'block': 'hidden'} w-full block lg:text-center flex-grow lg:flex lg:items-center p-0" id="Menu">
			<div class="w-full text-xl p-3 text-white mr-6 md:w-96 max-lg:hidden ">
				<a href={Routes.Home} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition">
						<i class="fa-solid fa-utensils mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</a>
			</div>
			
			<div class="w-full lg:flex justify-end items-center">
			
				<div class="flex p-0 cursor-pointer lg:hover:shadow-lg">
					<a on:click={toggleNavbar} href={Routes.Home} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 max-lg:ml-5"><i class="fa-solid fa-house me-2"></i>Home</a>
					</div>

				<div class="flex p-0 cursor-pointer lg:hover:shadow-lg">
					<a on:click={toggleNavbar} href={Routes.YourOrders} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 max-lg:ml-5"><i class="fa-solid fa-clock-rotate-left me-2"></i>Your Orders</a>
				</div>

				<div class="flex p-0 cursor-pointer lg:hover:shadow-lg">
					<a on:click={toggleNavbar} href={Routes.Feedback} class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 max-lg:ml-5"><i class="fa-regular fa-comments me-2"></i>Feedback</a>
				</div>
			
				<div class="relative flex p-0 cursor-pointer lg:hover:shadow-lg ">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="w-full block lg:inline-block text-lg font-semibold text-white p-2 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 max-lg:ml-5" on:click={toggleDropdown}><i class="fa-regular fa-circle-user me-2"></i>Admin
					</a>

					{#if showDropdown}
					<div class="w-max absolute z-10 text-start border-2 border-slate-700 bg-white shadow-xl mt-10 max-lg:ml-5 -ml-20">
						<a on:click={()=> {toggleNavbar(), toggleDropdown()}} href={Routes.Admin} class="" >
							<div class="block px-4 py-2 text-lg font-bold hover:bg-slate-200"><i class="fa-solid fa-user-pen me-2"></i>Admin Items </div>
						</a>
						<a on:click={()=> {toggleNavbar(), toggleDropdown()}} href={Routes.FeedbackResponses} class="" >
							<div class="block px-4 py-2 text-lg font-bold hover:bg-slate-200"><i class="fa-regular fa-comment-dots me-2"></i>Feedback Responses</div>
						</a>
					</div>
					{/if}
				</div>

				<div class="flex items-center justify-end max-lg:hidden">
					<div class="p-3 transition-all max-lg:-me-4">
						<a href={Routes.Cart} class="flex px-3 py-3 rounded text-xl text-white hover:text-amber-400 hover:border-amber-400 transition-all">
							<i class="fa-solid fa-cart-plus mx-2"></i>
							{#if item_count > 0}
								<span class="absolute text-sm ml-5 -mt-3 h-5 rounded-full px-2 bg-amber-400 text-black max-sm:text-xs">{item_count}</span>
							{/if}
						</a>
					</div>
				</div>
			</div>
	  	</div>
	</nav>
</header>