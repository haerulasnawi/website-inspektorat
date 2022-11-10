<script>
	import { Card, Label, Select } from 'flowbite-svelte';
	import { onMount } from 'svelte';
    import markerSD from '$lib/assets/marker sd.png'
    import markerSMP from '$lib/assets/markersmp.png'
    import setda from '$lib/assets/setda.png'
	let selected;
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];

	const center = { lat: -8.6201050994578, lng: 116.079964153476 };
	// const beaches = [
	// 	{ lat: -8.6201050994578, lng: 116.07996415347 },
	// 	{ lat: -8.5829887995408, lng: 116.10806230456 }
	// ];

	// const uluru = { lat: -33.890542, lng: 151.274856 };
	const beaches = [
		['Inspektorat', -8.6201050994578, 116.07996415347, 1,markerSMP],
		['Sekretariat Daerah', -8.5829887995408, 116.10806230456, 2,setda],
	];

    let mapElement
	onMount(async () => {
		const map = new google.maps.Map(mapElement, {
			zoom: 16,
			center: center
		});
		const image = {
			url: markerSD,
			size: new google.maps.Size(20, 32),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 32)
		};
		const shape = {
			coords: [1, 1, 1, 20, 18, 20, 18, 1],
			type: 'poly'
		};

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

<div class="h-screen relative">
	<div class="h-screen w-full" bind:this={mapElement} />
	<div class="absolute z-10 top-5 right-5 w-60 md:w-96">
		<Card class="bg-gray-300">
			<Label
				>Cari Obrik
				<Select class="mt-2" items={countries} bind:value={selected} placeholder="Unit IRBAN" />
			</Label>
			<Label>
				<Select class="mt-2" items={countries} bind:value={selected} placeholder="Obrik Kategori" />
			</Label>
			<Label>
				<Select class="mt-2" items={countries} bind:value={selected} placeholder="Pilih Obrik" />
			</Label>
		</Card>
	</div>
</div>
