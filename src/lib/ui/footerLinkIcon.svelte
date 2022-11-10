<script>
	export let href = '';
	export let align = '';
</script>

<li class="mb-4">
	<a {href} class="hover:underline hover:text-gray-800" target="blank">
		<div class="flex items-{align}">
			<slot />
		</div>
	</a>
</li>
