<script>
    import GradientPreview from '$lib/images/preview-gradient.jpg';
    import HeaderPreview from '$lib/images/preview-header.jpg';
    import HoverPreview from '$lib/images/preview-hover.jpg';
    import TodoPreview from '$lib/images/preview-todo.jpg';
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let animateHomepage = false

    onMount(() => {
        animateHomepage = true
    })

</script>

<main class="container homepage">
    {#if animateHomepage}
        <h2 class="title text-center overflow-hidden">
            <div transition:fly={{
                delay: 500,
                duration: 1000,
                x: 0,
                y: 50
            }} class="">Test project!</div>
        </h2>
        <ul class="image-list flex flex-wrap">
            <li class="list-item relative">
                <div transition:fly={{
                    delay: 1000,
                    duration: 1000,
                    x: -100,
                    y: 0
                }} class="h-full">
                    <a href="/gradient-background-logo" class="link-item relative overflow-hidden h-full">
                        <img
                            class="image-cell w-full h-full"
                            alt="Gradient Image"
                            src={GradientPreview}
                        />
                        <div class="link-item__title absolute uppercase text-center w-full overflow-hidden">
                            <div>Gradient Background Logo</div>
                        </div>
                    </a>
                </div>
            </li>
            <li class="list-item relative">
                <div transition:fly={{
                    delay: 1000,
                    duration: 1000,
                    x: 100,
                    y: 0
                }} class="h-full">
                    <a href="/website-header" class="link-item relative overflow-hidden h-full">
                        <img
                            class="image-cell w-full h-full"
                            alt="Header Image"
                            src={HeaderPreview}
                        />
                        <div class="link-item__title absolute uppercase text-center w-full overflow-hidden">
                            <div>Website header</div>
                        </div>
                    </a>
                </div>
            </li>
            <li class="list-item relative">
                <div transition:fly={{
                    delay: 1500,
                    duration: 1000,
                    x: -100,
                    y: 0
                }} class="h-full">
                    <a href="/navigation-hover" class="link-item relative overflow-hidden h-full">
                        <img
                            class="image-cell w-full h-full"
                            alt="Hover Image"
                            src={HoverPreview}
                        />
                        <div class="link-item__title absolute uppercase text-center w-full overflow-hidden">
                            <div>Navigation Hover</div>
                        </div>
                    </a>    
                </div>
            </li>
            <li class="list-item relative">
                <div transition:fly={{
                    delay: 1500,
                    duration: 1000,
                    x: 100,
                    y: 0
                }} class="h-full">
                    <a href="/to-do-app" class="link-item relative overflow-hidden h-full">
                        <img
                            class="image-cell w-full h-full"
                            alt="Todo Image"
                            src={TodoPreview}
                        />
                        <div class="link-item__title absolute uppercase text-center w-full overflow-hidden">
                            <div>To Do App</div>
                        </div>
                    </a>  
                </div>  
            </li>
        </ul>
    {/if}
</main>

<style lang="scss">
.image-list {
    margin-top: 20px;
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
    display: block;
    &__title {
        transition: .3s linear;
        bottom: 10%;
        opacity: 0;
        color: #ffffff;
        z-index: 5;
        div {
            transition: .5s linear;
            transform: translateY(100%);
        }
    }
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
        .link-item__title {
            opacity: 1;
            div {
                transform: translateY(0);
            }
        }
    }
}
.title {
    font-size: 32px;
    margin-top: 30px;
}
</style>