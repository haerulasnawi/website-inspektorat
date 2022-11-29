<script>
	import {
		Navbar,
		NavBrand,
		Button,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Drawer,
		CloseButton,
		DarkMode
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import NavLogo from '$lib/assets/kota.png';
	let hidden2 = true;
	function handleChangeroute(event) {
		hidden2 = event.detail.text;
	}
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let btnClass =
		'text-gray-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2';
</script>

<!-- <div class="relative px-8"> -->
<Navbar
	let:hidden
	let:toggle
	navClass="px-2 sm:px-4 py-2.5 w-full z-50 top-0 left-0 sticky z-50 drop-shadow-lg"
>
	<div class="flex">
		<!-- <button
			on:click={() => (hidden2 = false)}
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-2"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button> -->

		<NavBrand href="/">
			<div class="grid grid-row text-center">
				<!-- <img src={NavLogo} class="mr-3 h-14 md:h-16" alt="Flowbite Logo" /> -->
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>Inspektorat
				</span>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Kota Mataram</span
				>
			</div>
		</NavBrand>
	</div>

	<div class="flex justify-end md:order-2">
		<DarkMode {btnClass} />
		<Button gradient color="greenToBlue" href="/auth/login" size="sm">Log in</Button>
		<Avatar id="avatar-menu" src="https://placeimg.com/80/80/people" />
		<NavHamburger on:click={toggle} />
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm"> Bonnie Green </span>
				<span class="block truncate text-sm font-medium"> name@flowbite.com </span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
	</div>

	<NavUl {hidden}>
		<li>
			<a
				href="/"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				aria-current="page"
				data-sveltekit-noscroll>Beranda</a
			>
		</li>
		<li>
			<a
				href="/profile"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				aria-current="page"
				data-sveltekit-noscroll>Profile</a
			>
		</li>
		<!-- <li>
			<a
				href="/pelayanan"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				aria-current="page"
				data-sveltekit-noscroll>Galeri</a
			>
		</li> -->
		<!-- <li>
			<a
				href="/berita"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				aria-current="page"
				data-sveltekit-noscroll>Berita</a
			>
		</li> -->
		<li>
			<a
				href="/sapa-inspektur"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white gradient"
				aria-current="page"
				data-sveltekit-noscroll>SAPA Inspektur</a
			>
		</li>
		<!-- <li>
			<a
				href="/wbs"
				class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white gradient"
				aria-current="page"
				data-sveltekit-noscroll>WBS</a
			>
		</li> -->
	</NavUl>
</Navbar>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
	<div class="flex items-center">
		<img
			src="{NavLogo}"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Inspektorat</span
		>
		<CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white" />
	</div>
	<Sidebar on:changeRoute={handleChangeroute} />
</Drawer>
