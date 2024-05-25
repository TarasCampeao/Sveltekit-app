<script>
    export let open = false
</script>

<div class="sidemenu absolute h-screen w-full" class:open>
    <nav class="sidemenu-nav container h-full">
        <div class="sidemenu-nav__item overflow-hidden">
            <a href="/" class="sidemenu-link uppercase">
                <span>Home</span>
            </a>
        </div>
        <div class="sidemenu-nav__item overflow-hidden">
            <a href="/navigation-hover" class="sidemenu-link uppercase">
                <span>Navigation</span>
            </a>
        </div>
        <div class="sidemenu-nav__item overflow-hidden">
            <a href="/gradient-background-logo" class="sidemenu-link uppercase">
                <span>Gradient Background Logo</span>
            </a>
        </div>
        <div class="sidemenu-nav__item overflow-hidden">
            <a href="/to-do-app" class="sidemenu-link uppercase">
                <span>To Do App</span>
            </a>
        </div>
    </nav>
</div>


<style lang="scss">
.sidemenu {
    background: #1a1a1a;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: .7s linear;
    z-index: 10;
}
.sidemenu-nav {
    padding-top: 20vh;
    &__item {
        &:nth-of-type(n+2) {
            margin-top: 20px;
        }
        span {
            position: relative;
            opacity: .8;
            transition: .3s linear;
            &:after {
                content: '';
                position: absolute;
                display: block;
                height: 2px;
                background: currentColor;
                width: 0;
                bottom: 0;
                left: 0;
                transition: width .3s linear;
            }
        }
        &:hover {
            span {
                opacity: 1;
                &:after {
                    width: 100%;
                }
            }
        }
    }
}
.sidemenu-link {
    font-size: 24px;
    color: #ffffff;
    display: block;
    transform: translateY(0);
    transition: opacity .3s linear;
    opacity: 0;
    @media (min-width: 769px) {
        font-size: 42px;
    }
}
.open {
    transform: translateX(0%);
    .sidemenu-link {
        animation-name: fadeIn;
        animation-delay: .8s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transform: translateY(100%);
    }
}
</style>
