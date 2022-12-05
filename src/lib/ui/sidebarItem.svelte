<script>
    import { page } from '$app/stores';
	import { eventListeners } from '@popperjs/core';
    import { activeurl } from '../store';
	let aClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
	export let href = '';
	export let label = '';
    let active = false;
    export let urlA
    active=urlA==label?activeClass:aClass
</script>

<li>
	<a
        on:click
		href="{href}"
		class="{active}"
	>
		<span class="ml-3 description">{label}</span>
	</a>
</li>

<style>
    a span.description{
        pointer-events: none;
    }
</style>