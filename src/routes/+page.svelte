<script>
    import GradientPreview from '$lib/images/preview-gradient.jpg';
    import HeaderPreview from '$lib/images/preview-header.jpg';
    import HoverPreview from '$lib/images/preview-hover.jpg';
    import TodoPreview from '$lib/images/preview-todo.jpg';
</script>

<main class="container">
    <ul class="image-list flex flex-wrap">
        <li class="list-item">
            <a href="/gradient-background-logo" class="link-item h-full">
                <img
                    class="image-cell w-full h-full"
                    alt="Gradient Image"
                    src={GradientPreview}
                />
            </a>
        </li>
        <li class="list-item">
            <a href="/website-header" class="link-item h-full">
                <img
                    class="image-cell w-full h-full"
                    alt="Header Image"
                    src={HeaderPreview}
                />
            </a>
        </li>
        <li class="list-item">
            <a href="/navigation-hover" class="link-item h-full">
                <img
                    class="image-cell w-full h-full"
                    alt="Hover Image"
                    src={HoverPreview}
                />
            </a>    
        </li>
        <li class="list-item">
            <a href="/to-do-app" class="link-item h-full">
                <img
                    class="image-cell w-full h-full"
                    alt="Todo Image"
                    src={TodoPreview}
                />
            </a>    
        </li>
    </ul>
</main>

<style lang="scss">
.image-list {
    margin-top: 40px;
}
.list-item {
    width: calc(50% - 20px);
    height: 40vh;
    margin: 10px;
}
.image-cell {
    object-fit: cover;
    transition: .3s linear;
}
.link-item {
    position: relative;
    display: block;
    overflow: hidden;
    &:after {
        content: "";
        position: absolute;
        display: block;
        background: rgba(0, 0, 0, .3);
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        transition: .3s opacity linear;
    }
    &:hover {
        &:after {
            opacity: 1;
        }
        .image-cell {
            transform: scale(1.1);
        }
    }
}
</style>