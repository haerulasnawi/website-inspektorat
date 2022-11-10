<script>
	import { Progressbar } from 'flowbite-svelte';
	export let nomor;
	export let formasi;
	export let jumlah;
	export let color;
	export let darkColor;
</script>

<!-- <hr class="my-3 h-0.5 rounded bg-gray-800 border-0 dark:bg-gray-200" /> -->
<div class="my-4">
	<div class="mb-1 text-base font-medium dark:text-white"></div>
	<Progressbar progress="50" color="{color}" size="h-1"/>
</div>
<div class="grid grid-cols-4 text-{color}-800 dark:text-{darkColor}-200 md:mb-20    ">
	<h1 class="text-2xl lg:text-3xl mr-2">{nomor} - </h1>
	<h1 class="col-span-2 font-semibold text-3xl md:text-4xl lg:text-5xl mr-2 ">{formasi}</h1>
	<h1
		class="font-bold text-3xl md:text-4xl lg:text-5xl text-right mr-2"
	>
		{jumlah}
	</h1>
</div>
