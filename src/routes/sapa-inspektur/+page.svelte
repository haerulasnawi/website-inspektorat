<script>
	import { Card } from 'flowbite-svelte';
	import Componentanimate from '../../lib/componentanimate.svelte';
	import CardLayanan from '../../lib/ui/cardLayanan.svelte';
	import CoachingImage from '$lib/assets/coaching.gif';
	import PTLImage from '$lib/assets/ptl.gif';
	import { activeurl } from '$lib/store';
	import { onMount } from 'svelte';
	onMount(()=>{
		activeurl.update(value=>value="SAPA Inspektur")

	})
</script>

<div class="bg-slate-100 dark:bg-slate-900">
	<div class="container mx-auto pb-10">
		<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
			<div class="p-6 md:pt-10 lg:pt-20 text-center">
				<h1
					class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
				>S A P A
					<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
						>&emsp14; Inspektur</span
					>
				</h1>
				<!-- <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
					long-term value and drive economic growth.
				</p> -->
			</div>
		</Componentanimate>
	
		<div class="grid grid-cols-1 md:grid-cols-2">
			<!-- <Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
				<CardLayanan title="Layanan" url="/sapa-inspektur/layanan" />
			</Componentanimate> -->
			<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
				<CardLayanan {CoachingImage} title="Imtak Pengawasan" url="#" penjelasan="Layanan konsultasi Obrik untuk pembinaan penyelenggaraan pemerintahan" />
			</Componentanimate>
			<Componentanimate animate="scale-up-center 1s cubic-bezier(.215,.61,.355,1.000) both">
				<CardLayanan
					CoachingImage={PTLImage}
					title="Pemantauan Tindak Lanjut"
					url="https://simhpnas.inspektorat.mataramkota.go.id/#/login"
					penjelasan="Aplikasi pemantauan tindak lanjut terintegrasi dengan SIMHPNAS"
				/>
			</Componentanimate>
		</div>
	</div>
</div>
