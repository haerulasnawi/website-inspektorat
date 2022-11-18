<script>
	import Saos from 'saos';
	export let animate;
</script>

<Saos animation={animate}>
	<slot />
</Saos>

<style>
	@keyframes -global-slide-top {
		0% {
			transform: translateY(100px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes -global-slide-right {
		0% {
			transform: translateX(-100px);
		}
		100% {
			transform: translateX(0);
		}
	}
	@keyframes -global-slide-left {
		0% {
			transform: translateX(100px);
		}
		100% {
			transform: translateX(0);
		}
	}
	@keyframes -global-slide-bottom {
		0% {
			transform: translateY(-100px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes -global-scale-up-center {
		0% {
			transform: scale(0.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
