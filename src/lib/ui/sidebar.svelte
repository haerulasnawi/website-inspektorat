<script>
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { activeurl } from '../store';
	import SideItem from '$lib/ui/sidebarItem.svelte';
	// console.log($page)
	import SidebarLogo from '$lib/assets/kota.png';
	const dispatch = createEventDispatcher();
	let urlActive;
	activeurl.subscribe((value) => {
		urlActive=value;
	});
	function changeRoute(event) {
		activeurl.update(value=>event.target.innerText)
		// console.log(event.target.href);
		
		dispatch('changeRoute', {
			text: 'false'
		});
		// urlA = $page.routeId;
	}
</script>

<Sidebar class="absolute w-auto">
	<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
		<SidebarGroup>
			<!-- <li>
				<a
					on:click={changeRoute}
					href="/"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<span class="ml-3 description">Dashboard</span>
				</a>
			</li> -->
			<SideItem urlA={urlActive} label="Beranda" href="/" on:click={changeRoute} />
			<SideItem urlA={urlActive} label="Profile" href="/profile" on:click={changeRoute} />
			<SideItem
				urlA={urlActive}
				label="SAPA Inspektur"
				href="/sapa-inspektur"
				on:click={changeRoute}
			/>
			<SideItem urlA={urlActive} label="WBS" href="/wbs" on:click={changeRoute} />
			<!-- <SidebarItem label="SAPA Inspektur" href="/sapa-inspektur" on:click={changeRoute} />
			<SidebarItem label="WBS" href="/wbs" on:click={changeRoute} />
			<SidebarItem label="" on:click={changeRoute} /> -->
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
