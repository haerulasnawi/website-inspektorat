<script>
	import { Heading, P, Span, Hr, Img, A, Button } from 'flowbite-svelte';
	import FormasiList from '../../lib/ui/formasiList.svelte';
	import logoKota from '$lib/assets/kota.png';
	import Inspektur from '$lib/assets/nelly.png';
	import Saos from 'saos';
	import Componentanimate from '../../lib/componentanimate.svelte';
	import CordinateData from '../../lib/api/cordinates/cordinateData.json';
	let cordinates = CordinateData;
	cordinates.forEach((element) => {
		console.log(element);
	});
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>
<Componentanimate animate={'slide-top 1s cubic-bezier(.25,.46,.45,.94) both'}>
	<div class="container mx-auto -mt-6 mb-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 items-center">
			<div class="">
				<img src={logoKota} class="w-10 md:w-16 lg:w-24 mb-5" alt="" />
				<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
					><Span gradient>INSPEKTORAT</Span><br />Kota Mataram</Heading
				>
			</div>
			<div class="flex justify-center">
				<div class="flex flex-col text-center">
					<Img
						src={Inspektur}
						alt="sample 1"
						size="max-w-lg"
						class="rounded-lg w-3/4"
						imgClass=""
					/>
					<Heading tag="h6" align="center" class="mt-5"
						>B. Nelly Kusumawati M., M.Ak., CGCAE</Heading
					>
					<P align="center" space="wider">Inspektur Kota Mataram</P>
				</div>
			</div>
		</div>
	</div>
</Componentanimate>

<Componentanimate animate={'slide-top 2s cubic-bezier(.25,.46,.45,.94) both'}>
	<div class="container mx-auto flex flex-col md:flex-row mb-16 items-center">
		<div class="mx-5 md:basis-2/5 md:order-last">
			<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
				><Span gradient>Alamat</Span> <br />Inspektorat Kota Mataram.</Heading
			>
			<P color="text-gray-500"
				>Jl. Dr. Sudjono Lingkar Selatan - Mataram, Provinsi Nusa Tenggara Barat</P
			>
		</div>
		<div class="w-full p-3 md:basis-3/5">
			<div class="mapouter">
				<div class="gmap_canvas rounded-xl hover:shadow-xl">
					<!-- svelte-ignore a11y-missing-attribute -->
					<iframe
						class="gmap_iframe"
						width="100%"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=inspektorat kota mataram&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					/><a href="https://formatjson.org/">format json</a>
				</div>
				<style>
					.mapouter {
						position: relative;
						text-align: right;
						width: 100%;
						height: 500px;
					}
					.gmap_canvas {
						overflow: hidden;
						background: none !important;
						width: 100%;
						height: 500px;
					}
					.gmap_iframe {
						height: 500px !important;
					}
				</style>
			</div>
		</div>
	</div>
</Componentanimate>

<div class="bg-slate-100 dark:bg-slate-900">
	<div class="container p-5 mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
			<div class="md:pr-14 flex flex-col justify-between">
				<Componentanimate animate="slide-top 1s cubic-bezier(.25,.46,.45,.94) both">
					<div class="mb-10 md:mb-0">
						<h1
							class="mb-3 md:mb-4 text-3xl font-bold tracking-tight leading-none text-gray-800 md:text-4xl lg:text-5xl dark:text-white"
						>
							Formasi <span class="text-cyan-400">Pegawai</span>
						</h1>

						<P color="text-gray-500" justify="true"
							>Kedudukan, Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja Inspektorat Kota
							Mataram tertuang pada Peraturan Walikota Mataram Nomor 34 Tahun 2016
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="https://jdih.mataramkota.go.id/file/PERWAL%20NOMOR%2034%20TAHUN%202016%20-%20TUPOKSI%20INSPEKTORAT%20(Tipe%20B).pdf"
								target="blank"
								class="inline-flex items-center text-lg text-cyan-700 dark:text-cyan-400 hover:underline"
							>
								Read more
								<svg
									class="ml-1 w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/></svg
								>
							</a></P
						>
					</div>
				</Componentanimate>
				<Componentanimate animate="slide-right .5s cubic-bezier(.25,.46,.45,.94) both">
					<div class="md:mb-20">
						<a
							href="/"
							target="blank"
							type="button"
							class="text-white bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
						>
							Struktur Organisasi
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
						</a>
					</div>
				</Componentanimate>
			</div>
			<div class="mb-10 md:mb-0">
				<Componentanimate animate="slide-top 1s cubic-bezier(.25,.46,.45,.94) both">
					<FormasiList nomor="01" formasi="Struktural" jumlah="8" color="gray" darkColor="gray" />
				</Componentanimate>
				<Componentanimate animate="slide-top 1s cubic-bezier(.25,.46,.45,.94) both">
					<FormasiList nomor="02" formasi="Auditor" jumlah="23" color="indigo" darkColor="indigo" />
				</Componentanimate>
				<Componentanimate animate="slide-top 1s cubic-bezier(.25,.46,.45,.94) both">
					<FormasiList nomor="03" formasi="P2UPD" jumlah="9" color="yellow" darkColor="yellow" />
				</Componentanimate>
				<Componentanimate animate="slide-top 1s cubic-bezier(.25,.46,.45,.94) both">
					<FormasiList nomor="04" formasi="Pelaksana" jumlah="25" color="green" darkColor="green" />
				</Componentanimate>
			</div>
		</div>
	</div>
</div>
