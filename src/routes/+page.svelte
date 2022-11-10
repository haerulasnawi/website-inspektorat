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


<Carousel />
<div class="text-center ">
	<Heading tag="h3" class="mb-14 mt-24" style="font-size: calc(1.375rem + 1.5vw)"
		>Fungsi Inspektorat</Heading
	>
</div>
<div
	class="p-5npm container mx-auto grid grid-cols-1 place-content-center gap-3 justify-items-center md:grid-cols-2 xl:grid-cols-4"
>
	<CardPelayan text="text fadfa adfa dfa dfs adfa dfa dfadf asdf as" />
	<CardPelayan text="text fadfa adfa dfa dfs adfa dfa dfadf asdf as" />
	<CardPelayan text="text fadfa adfa dfa dfs adfa dfa dfadf asdf as" />
	<CardPelayan text="text fadf dfa s" />
</div>
<div class="text-center mt-14 mb-10">
	<Heading tag="h3" style="font-size: calc(1.375rem + 1.5vw)">Apps</Heading>
</div>

<div class="grid grid-cols-1 w-4/3 justify-items-center">
	<div>
		<Card
			img="https://bkpsdm.mataramkota.go.id/assets/informasi/simutiara.png"
			href="/"
			horizontal
			reverse={hCard}
			class="md:max-w-full"
		>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Noteworthy technology acquisitions 2021
			</h5>
			<p class="mb-3 text-gray-700 dark:text-gray-400 leading-tight">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
		</Card>
		<Toggle bind:checked={hCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
	</div>
</div>
<Map/>
<!-- <Footer/> -->
