<script>
	import { Heading, P, Span, Select, Label,Card, Button, Toggle } from 'flowbite-svelte';
	import Carousel from '../lib/ui/carousel/carousel.svelte';
	import CardPelayan from '../lib/ui/cardPelayan.svelte';
	import Map from '../lib/ui/map/map.svelte';
	let selected;
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];
	let hCard = false;
</script>

<svelte:head>
	<title>Inspektorat</title>
</svelte:head>


<!-- <Carousel />
<div class="text-center ">
	<Heading tag="h3" class="mb-14 mt-24" style="font-size: calc(1.375rem + 1.5vw)"
		>Layanan</Heading
	>
</div>
<div
	class="p-5npm container mx-auto grid grid-cols-1 place-content-center gap-3 justify-items-center md:grid-cols-2 xl:grid-cols-4"
>
</div>
<div class="text-center mt-14 mb-10">
	<Heading tag="h3" style="font-size: calc(1.375rem + 1.5vw)">Peta Lokasi Obrik</Heading>
</div> -->


<Map/>
<!-- <Footer/> -->
