<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Card,
		Button,
		Modal,
		Label,
		Input,
		Textarea,
		Heading,
		Pagination,
		ChevronRight,
		ChevronLeft,
		FloatingLabelInput,
		Helper,
		Alert
	} from 'flowbite-svelte';

	import sidebar2 from '$lib/ui/sidebarImtak.svelte';
	import Sidebar from '../../../lib/ui/sidebar.svelte';
	import SidebarImtak from '../../../lib/ui/sidebarImtak.svelte';
	import CardDashboard from '../../../lib/ui/cardDashboard.svelte';
	import { each } from 'svelte/internal';
	let defaultModal = false;
	let textareaprops = {
		name: 'penjelasan',
		rows: 4,
		placeholder: 'Ringkasan permasalahan...'
	};
	// /** @type {import('./$types').PageData} */
	export let data;
	// console.log(data.data);
	let pages = [
		{ name: 1, href: '/' },
		{ name: 2, href: '/' },
		{ name: 3, href: '/' },
		{ name: 4, href: '/' },
		{ name: 5, href: '/' }
	];
	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
</script>

<!-- <SidebarImtak /> -->
<div class="absolute right-4 top-24">
	<Alert color="green">
		<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>
<Modal bind:open={defaultModal} size="xs" autoclose={false}>
	<form class="flex flex-col space-y-6" method="POST" action="/sapa-inspektur/imtak-pengawasan">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Tambah agenda baru</h3>
		<div class="relative">
			<input
				type="text"
				name="permasalahan"
				id="floating_outlined"
				class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="permasalahan"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
				>Permasalahan</label
			>
		</div>
		<Textarea {...textareaprops} />
		<div class="relative">
			<input
				type="date"
				name="tanggal_waktu"
				id="floating_outlined"
				class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
			/>
			<label
				for="permasalahan"
				class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
				>tanggal</label
			>
		</div>
		<Button type="submit" class="w-full1" gradient color="cyanToBlue">Ajukan Agenda</Button>
	</form>
</Modal>
<div class="container mx-auto my-5 flex flex-col">
	<Heading tag="h1" class="mb-10">Imtak Pengawasan</Heading>
	<!-- <div class="my-5 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4"> -->
	<CardDashboard title="Agenda selesai" keterangan="Agenda imtak pengawasan terlaksana" />
	<CardDashboard title="Agenda dalam proses" keterangan="Agenda imtak pengawasan dalam proses" />
	<!-- </div> -->
	<div class="text-right">
		<button
			on:click={() => (defaultModal = true)}
			class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4"
			>Ajukan Agenda</button
		>
	</div>

	<div
		class="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
	>
		<Table>
			<caption
				class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
			>
				Riwayat Agenda
				<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
					<!-- Browse a list of Flowbite products designed to help you work and play, stay organized, get
					answers, keep in touch, grow your business, and more. -->
				</p>
			</caption>
			<TableHead>
				<TableHeadCell>Permasalahan</TableHeadCell>
				<TableHeadCell>Penjelasan Umum</TableHeadCell>
				<TableHeadCell>Tanggal & Waktu</TableHeadCell>
				<TableHeadCell>Status</TableHeadCell>
				<TableHeadCell>Action</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#each data.data as item}
					<!-- content here -->
					<TableBodyRow>
						<th
							scope="row"
							class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.attributes.permasalahan}
						</th>
						<td class="py-4 px-6">{item.attributes.penjelasan}</td>
						<td class="py-4 px-6"> {item.attributes.tanggal_waktu}</td>
						<td class="py-4 px-6"> {item.attributes.status}</td>
						<td class="py-4 px-6 ">
							<a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>Edit</a
							>
						</td>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
	<!-- <div class="mt-2 flex text-center">
		<Pagination {pages} on:previous={previous} on:next={next} icon>
			<svelte:fragment slot="prev">
				<span class="sr-only">Previous</span>
				<ChevronLeft class="w-5 h-5" />
			</svelte:fragment>
			<svelte:fragment slot="next">
				<span class="sr-only">Next</span>
				<ChevronRight class="w-5 h-5" />
			</svelte:fragment>
		</Pagination>
	</div> -->
</div>
