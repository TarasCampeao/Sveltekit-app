<script>
    import GradientPreview from '$lib/images/preview-gradient.jpg';
    import HeaderPreview from '$lib/images/preview-header.jpg';
    import HoverPreview from '$lib/images/preview-hover.jpg';
    import TodoPreview from '$lib/images/preview-todo.jpg';
</script>

<h1>Welcome to SvelteKit</h1>

<ul class="image-list flex">
    <li class="image-list__item">
        <a href="/">
            <img alt="Gradient Image" src={GradientPreview} />
        </a>
    </li>
    <li class="image-list__item">
        <a href="/">
            <img alt="Header Image" src={HeaderPreview} />
        </a>
    </li>
    <li class="image-list__item">
        <a href="/">
            <img alt="Hover Image" src={HoverPreview} />
        </a>    
    </li>
    <li class="image-list__item">
        <a href="/">
            <img alt="Todo Image" src={TodoPreview} />
        </a>    
    </li>
</ul>


<style lang="scss">
    .gradient-logo {
        height: 80vh;
        width: 80vw;
        background: red;
    }
</style>
