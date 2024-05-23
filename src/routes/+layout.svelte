<script>
    import '$lib/styles/reset.scss';
	import '$lib/styles/main.scss';
	import "$lib/styles/app.css";
</script>

<div class="wrapper">
	<nav>
		<a href="/">Home</a>
		<a href="/navigation-hover">Navigation</a>
		<a href="/gradient-background-logo">Gradient Background Logo</a>
		<a href="/website-header">Website Header</a>
		<a href="/to-do-app">To Do App</a>
	</nav>
	<slot />
</div>
