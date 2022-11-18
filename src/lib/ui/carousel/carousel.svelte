<script>
	import { Carousel } from 'flowbite-svelte';
	import { images } from './server';
    let showThumbs=false
    let showCaptions=false
</script>

<div class="max-h-full">
    <!-- <div class="w-full h-full absolute z-10 bg-slate-500 bg-opacity-70"></div> -->
    <Carousel {images} loop {showCaptions} {showThumbs} duration="3000" divClass=""/>
</div>