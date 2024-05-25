<script>
	import '$lib/styles/main.scss';
	import HomeLogo from '$lib/icons/HomeLogo.svelte';
</script>

<div class="wrapper">
	<slot />
	<a href="/" class="home-btn fixed flex items-center justify-center overflow-hidden"><HomeLogo /></a>
</div>

<style lang="scss">
.home-btn {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transition: .3s linear;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, .7);
	left: 20px;
	top: 20px;
	z-index: 5;
	background: #ffffff;
	animation-name: showHome;
	animation-delay: 3.5s;
    animation-duration: 1s;
	animation-fill-mode: forwards;
	opacity: 0;
	@media (min-width: 769px) {
		left: 40px;
		top: 40px;
	}
	@media (hover: hover) and (pointer: fine) {
		&:hover {
			box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .7);
		}
	}
}
</style>
