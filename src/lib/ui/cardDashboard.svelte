<script>
	import { Card } from 'flowbite-svelte';
    export let title
    export let keterangan
</script>

<Card class="mb-4">
	<div class="flex justify-betwen mb-">
		<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
			><path
				d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
			/></svg
		> -->
		<h5
			class=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white self-center"
		>
			{title}
		</h5>
	</div>
	<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
		{keterangan}
	</p>
</Card>
