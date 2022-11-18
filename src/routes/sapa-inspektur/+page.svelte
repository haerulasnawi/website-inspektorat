<script>
	import { Card } from 'flowbite-svelte';
	import Componentanimate from '../../lib/componentanimate.svelte';
	import CardLayanan from '../../lib/ui/cardLayanan.svelte';
</script>

<div class="container mx-auto mb-10">
	<Componentanimate animate="slide-right .5s cubic-bezier(.25,.46,.45,.94) both">
		<div class="p-6 md:mt-10 lg:mt-20">
			<h1
				class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
			>
				<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
					>Layanan</span
				> Inspektorat
			</h1>
			<!-- <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
				Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
				long-term value and drive economic growth.
			</p> -->
		</div>
	</Componentanimate>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
			<CardLayanan title="Layanan" url="/sapa-inspektur/layanan" />
		</Componentanimate>
		<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
			<CardLayanan title="Imtak Pengawasan" url="/sapa-inspektur/imtakpengawasan" />
		</Componentanimate>
		<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
			<CardLayanan title="Pemantauan Tindak Lanjut" url="/sapa-inspektur/ptl" />
		</Componentanimate>
	</div>
</div>
