<script>
	export let showOnPx = 300;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<!-- <div class="back-to-top" on:click={goTop} class:hidden>Back to top</div> -->
<div class="back-to-top" on:click={goTop} class:hidden>
	<button
		type="button"
		class="text-white bg-gradient-to-r to-emerald-600 from-sky-400 focus:ring-4 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center fixed right-8 bottom-4 md:right-10 md:bottom-14 z-50"
	>
		<svg
			class="w-5 h-5 md:w-6 md:h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/></svg
		>

		<span class="sr-only">Icon description</span>
	</button>
</div>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 1s, visibility 1s;
		/* user-select: none; */
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
