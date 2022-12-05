<script>
	import {
		Heading,
		P,
		Button,
		Span,
		Card,
		FloatingLabelInput,
		Helper,
		Textarea,
		Label
	} from 'flowbite-svelte';
	import { activeurl } from '$lib/store';
	import { onMount } from 'svelte';
	onMount(() => {
		activeurl.update((value) => (value = 'WBS'));
	});
</script>

<div class="bg-gray-100 dark:bg-gray-800">
	<div class="container mx-auto py-10 px-5">
        <div class="grid md:grid-cols-2 gap-4">
            <div class="p-5 md:p-10">
                <div class="text-left">
                    <Heading tag="h2" class="mb-10" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
                        >Whistle blowing System <Span gradient>(WBS)</Span></Heading
                    >
                </div>
                <P  justify opacity="" space=""
                    >Whistleblowing System (WBS), sistem ini disediakan dalam upaya memfasilitasi mekanisme
                    penyampaian pengaduan dugaan tindak pidana korupsi yang telah terjadi, sedang terjadi, atau
                    akan terjadi yang melibatkan pegawai dan orang lain yang berkaitan dengan dugaan tindak
                    pidana korupsi yang dilakukan di Lingkungan Pemerintah Kota Mataram. 
                    <Heading color="red" tag="h4" customeSize=" font-extrabold ">Rahasia Anda terjamin</Heading>
                     Anda tidak perlu khawatir terungkapnya identitas diri anda karena Inspektorat
                    Kota Mataram akan <strong
                    class="font-bold text-gray-900 dark:text-white"> MERAHASIAKAN IDENTITAS DIRI ANDA</strong> sebagai whistleblower. Inspektorat
                    Kota Mataram menghargai informasi yang Anda laporkan. Fokus kami kepada materi informasi
                    yang Anda Laporkan. Silahkan laporkan pelanggaran yang Anda jumpai melalui form WBS berikut.</P
                >

            </div>
			<Card size="xl" class="grid gap-3 bg-gray-9 dark:bg-gray-900 border-0">
				<FloatingLabelInput style="outlined" id="nip" name="nip" type="text" label="NIP" />
				<FloatingLabelInput style="outlined" id="name" name="name" type="text" label="Nama" />
				<FloatingLabelInput style="outlined" id="email" name="email" type="text" label="Email" />
				<FloatingLabelInput
					style="outlined"
					id="phone"
					name="phone"
					type="text"
					label="Nomor Telepon"
				/>
				<textarea
					id="message"
					rows="4"
					class="border-1 block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Aduan..."
				/>

				<Button gradient color="greenToBlue">Kirim</Button>
			</Card>
		</div>
	</div>
</div>
