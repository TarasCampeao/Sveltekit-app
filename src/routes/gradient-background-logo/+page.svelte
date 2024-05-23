<script>
    import BingLogo from '$lib/icons/BingLogo.svelte'
    import { scale } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte'
    
    let animate = false

    onMount(() => {
        animate = true
    })
</script>

<div class="gradient-logo h-screen flex items-center justify-center">
    {#if animate}
        <div transition:scale={{
                delay: 800,
                duration: 1500,
                opacity: 0,
                start: 0
            }} class="logo bg-white flex flex-col items-center justify-center shadow-xl">
            <div class="image-wrapper">
                <div transition:fly={{
                    delay: 1700,
                    duration: 800,
                    x: 0,
                    y: 100,
                    opacity: 0
                }}>
                    <BingLogo class="block" />
                </div>
            </div>
            <div class="logo-text">
                <div transition:fly={{
                    delay: 2100,
                    duration: 800,
                    x: 0,
                    y: 100,
                    opacity: 0
                }}>Bing</div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .gradient-logo {
        background: linear-gradient(200deg, rgb(140,176,255), rgb(215,200,255), rgb(242,252,254));
    }
    .logo {
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 70px;
    }
    .logo-text {
        color: #505050;
        margin-top: 10px;
        font-size: 18px;
        letter-spacing: 1.2px;
        overflow: hidden;
    }
    .image-wrapper {
        overflow: hidden;
    }
</style>