<script>
	import {
		Heading,
		P,
		Span,
		Chevron,
		Select,
		Search,
		Label,
		Card,
		Button,
		Toggle,
		Dropdown
	} from 'flowbite-svelte';
	import Map from '../lib/ui/map/map.svelte';
	import markerSMP from '../lib/assets/SMP.png';
	import setda from '$lib/assets/setda.png';
	import Componentanimate from '../lib/componentanimate.svelte';
	import { onMount } from 'svelte';
	let selected;
	let selectObrik = [
		{ value: '0', text: ['Inspektorat', -8.6201050994578, 116.07996415347, 1, setda] },
		{ value: '1', text: ['Sekretariat Daerah', -8.5829887995408, 116.10806230456, 2, setda] },
		{ value: '2', text: ['Dinas PUPR', -8.577670498, 116.1038016, 3, setda] },
		{ value: '3', text: ['Dinas Perhubungan', -8.5662436221045, 116.13495279104, 4, setda] },
		{ value: '4', text: ['Dinas Pendidikan', -8.5855842707727,116.08887780458, 5, setda] },
		{ value: '5', text: ['Dinas Kependudukan dan Pencatatan Sipi', -8.6202141592562,116.0898745805, 6, setda] },
		{ value: '6', text: ['Dinas Pertanian', -8.5801609124856,116.12141165882, 7, setda] },
		{ value: '7', text: ['Dinas Pengendalian Penduduk dan Keluarga Berencana', -8.6201163700767, 116.07960809022, 8, setda] },
		{ value: '8', text: ['Badan Keuangan Daerah', -8.5820774464466, 116.10873419791, 9, setda] },
		{ value: '9', text: ['Dinas Perumahan Dan Kawasan Permukiman', -8.5931965339924, 116.15219168365, 10, setda] },
	];
	const center = { lat: -8.6201050994578, lng: 116.079964153476 };

	let mapElement;
	onMount(async () => {
		const map = new google.maps.Map(mapElement, {
			zoom: 13,
			center: center
		});

		for (let i = 0; i < selectObrik.length; i++) {
			const beach = selectObrik[i];

			new google.maps.Marker({
				position: { lat: beach.text[1], lng: beach.text[2] },
				map,
				icon: beach.text[4],
				// shape: shape,
				title: beach.text[0],
				zIndex: beach.text[3]
			});
		}
	});
	function changeobrik() {
		// console.log(selected);
		const map = new google.maps.Map(mapElement, {
			zoom: 18,
			center: { lat: selectObrik[selected].text[1], lng: selectObrik[selected].text[2] }
		});
		for (let i = 0; i < selectObrik.length; i++) {
			const beach = selectObrik[i];

			new google.maps.Marker({
				position: { lat: beach.text[1], lng: beach.text[2] },
				map,
				icon: beach.text[4],
				// shape: shape,
				title: beach.text[0],
				zIndex: beach.text[3]
			});
		}
	}
</script>

<svelte:head>
	<title>Inspektorat</title>
</svelte:head>
<div class="h-screen relative">
	<div class="h-screen w-full right" bind:this={mapElement} />
	<div
		class="absolute z-10  top-20 md:top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-96"
	>
	<Componentanimate animate="slide-bottom 1s cubic-bezier(.25,.46,.45,.94) both">
	<div class="relative grid justify-items-center">

			<Button gradient color="greenToBlue"><Chevron>Cari Obyek Pemeriksaan</Chevron></Button>
			<Dropdown class="overflow-y-auto px-3 pb-3 text-sm">
				<div slot="header" class="p-3">
					<Search size="md" />
				</div>
				<select
					id="countries"
					class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					bind:value={selected}
					on:change={changeobrik}
				>
					{#each selectObrik as { value,text }}
						<option {value}>{text[0]}</option>
					{/each}
				</select>

				<!-- <button
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
				</button> -->
			</Dropdown>
		</div>
	</Componentanimate>
	</div>
</div>
