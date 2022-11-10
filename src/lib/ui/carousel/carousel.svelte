<script>
	import { Carousel } from 'flowbite-svelte';
	import { images } from './server';
    let showThumbs=false
    let showCaptions=false
</script>

<div class="max-h-full">
    <Carousel {images} loop {showCaptions} {showThumbs} duration="3000" divClass="max-h-full"/>
</div>