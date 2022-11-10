<script>
	import { Card } from 'flowbite-svelte';
	export let text;
</script>

<Card class="m-2 border-none shadow-none transition ease-in-out  hover:border-gray-200 hover:shadow-md hover:-translate-y-1 hover:scale-110 w-full">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-12 h-12 mb-2 "
        color="blue"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
		/></svg
	>
	<!-- <a href="/"> -->
		<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
			{text}
		</h5>
	<!-- </a> -->
	<!-- <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="/" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
    </a>  -->
</Card>

