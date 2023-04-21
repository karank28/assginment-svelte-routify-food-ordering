<script lang="ts">
  import { Routes } from './enums/routes';
  
  let showNavbar:boolean = false;
	function toggleNavbar() {
	  showNavbar = !showNavbar;
	}
</script>

<header class="w-full fixed top-0 z-10">
	<nav class="items-center justify-between flex-wrap bg-sky-500">
		<div class="w-full flex flex-shrink-0 items-center text-white mr-6 justify-between">
			<div class="text-2xl p-5">
				<a href={Routes.Home} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition hover:translate-x-2 hover:scale-110">
						<i class="fa-solid fa-store mx-2"></i>
						<p class="font-semibold">Taste! Food Services</p>
					</div>
				</a>
			</div>
		
			<div class="block lg:hidden p-5 transition-all">
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

      <div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
        <a href={Routes.Admin} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Admin</a>
      </div>
	  </div>
	</nav>
</header>
<!-- <nav>
  <ul>
    <li><a href={Routes.Home}>Home</a></li>
    <li><a href={Routes.YourOrders}>Your Orders</a></li>
    <li><a href={Routes.Feedback}>Feedback</a></li>
    <li><a href={Routes.Admin}>Admin</a></li>
  </ul>
</nav> -->
  