<script>
    import BingLogo from '$lib/icons/BingLogo.svelte'
</script>

<div class="gradient-logo h-screen flex items-center justify-center">
    <div class="logo bg-white flex flex-col items-center justify-center shadow-xl">
        <BingLogo class="block" />
        <div class="logo-text">Bing</div>
    </div>
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
    }
</style>