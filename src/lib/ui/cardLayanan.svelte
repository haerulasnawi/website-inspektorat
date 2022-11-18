<script>
	export let title;
	export let url;
</script>

<div class="mx-auto max-w-md p-6 ">
	<div class="inline-flex items-center">
		<svg
			class="w-10 h-10 mb-2 text-gray-500 gap-1 dark:text-gray-400"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
				clip-rule="evenodd"
			/><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /></svg
		>
		<a href="#">
			<h5 class="ml-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
	</div>
	<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
		Go to this step by step guideline process on how to certify for your weekly benefits:
	</p>
	<a href="{url}"
		type="button"
		class="inline-flex mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2"
		>Masuk Aplikasi
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
	<img
		class="max-w-full h-auto"
		src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
		alt="image description"
	/>
</div>
