<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte'
    
    let animate = false

    onMount(() => {
        animate = true
    })
</script>

<div class="nav-hover h-screen flex items-center justify-center">
    {#if animate}
        <nav class="navigation">
            <ul class="nav-list flex"
                transition:fly={{
                    delay: 500,
                    duration: 1000,
                    x: 0, y: 50,
                    opacity: 0, }}
                >
                <li class="nav-list__item">
                    <a href="/" class="nav-list__link">Animation</a>
                </li>
                <li class="nav-list__item">
                    <a href="/" class="nav-list__link">Branding</a>
                </li>
                <li class="nav-list__item">
                    <a href="/" class="nav-list__link">Illustration</a>
                </li>
            </ul>
        </nav>
    {/if}
</div>

<style lang="scss">
.nav-hover {
    background: linear-gradient(rgb(0,1,22) 65%, rgb(3,10,56));
}
.nav-list {
    &__link {
        font-size: 28px;
        color: #726F80;
        letter-spacing: 1.2px;
        margin: 0 30px;
        position: relative;
        padding-bottom: 15px;
        &:after,
        &:before {
            content: "";
            position: absolute;
            display: block;
            background: #ffffff;
            width: 0;
            height: 5px;
            bottom: -10px;
            transition: 0.3s width linear;
        }
        &:after {
            left: 51%;
            transform: translateX(-100%);
            border-radius: 2px 0 0 2px;
        }
        &:before {
            left: 49%;
            border-radius: 0 2px 2px 0;
        }
        &:hover {
            color: #ffffff;
            &:after,
            &:before {
                width: 25%;
            }
        }
    }
    &__item {
        animation-name: slidein;
    }
}
</style>