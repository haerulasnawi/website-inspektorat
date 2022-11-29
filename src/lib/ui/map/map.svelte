<script>
	import {
		Card,
		Label,
		Select,
		Button,
		Dropdown,
		DropdownItem,
		Chevron,
		Checkbox,
		Search
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import markerSD from '$lib/assets/SD.png';
	import markerSMP from '$lib/assets/SMP.png';
	import setda from '$lib/assets/setda.png';
	import Componentanimate from '../../componentanimate.svelte';
	let selected;
	// export let countries = [
	// 	{ value: 'us', name: 'United States' },
	// 	{ value: 'ca', name: 'Canada' },
	// 	{ value: 'fr', name: 'France' }
	// ];

	const center = { lat: -8.6201050994578, lng: 116.079964153476 };
	const beaches = [
		['Inspektorat', -8.6201050994578, 116.07996415347, 1, markerSMP],
		['Sekretariat Daerah', -8.5829887995408, 116.10806230456, 2, setda]
	];

	let mapElement;
	onMount(async () => {
		const map = new google.maps.Map(mapElement, {
			zoom: 13,
			center: center
		});

		for (let i = 0; i < beaches.length; i++) {
			const beach = beaches[i];

			new google.maps.Marker({
				position: { lat: beach[1], lng: beach[2] },
				map,
				icon: beach[4],
				// shape: shape,
				title: beach[0],
				zIndex: beach[3]
			});
		}
	});
</script>

<!-- <div class="h-screen relative"> -->
	<div class="h-screen w-full right" bind:this={mapElement} />
	<!-- <div
		class="absolute z-10  top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-96"
	>
	<Componentanimate animate="slide-bottom 1s cubic-bezier(.25,.46,.45,.94) both">

		<Button gradient color="greenToBlue"><Chevron>Cari Obyek Pemeriksaan</Chevron></Button>
		<Dropdown class="overflow-y-auto px-3 pb-3 text-sm">
			<div slot="header" class="p-3">
				<Search size="md" />
			</div>
			<Label>
				<Select class="mt-2" items={countries} bind:value={selected} placeholder="Unit IRBAN" />
			</Label>
			<Label>
				<Select class="mt-2" items={countries} bind:value={selected} placeholder="Obrik Kategori" />
			</Label>

			<button
				type="button"
				class="mt-2 w-fulltext-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex text-slate-100"
			>
				Cari
				<svg
					aria-hidden="true"
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</Dropdown>
	</Componentanimate>
	</div> -->
<!-- </div> -->
