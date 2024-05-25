<script>
	export let open = false
</script>

<div class="hamburger-menu flex justify-between cursor-pointer" class:open on:click={() => open = !open}>
    <div class="menu-icon h-full flex flex-col justify-between">
        <div class="w-full"></div>
        <div class="w-full"></div>
        <div class="w-full"></div>
    </div>
    <span class="menu-word">Menu</span>
</div>

<style lang="scss">
.hamburger-menu {
    z-index: 15;
    @media (min-width: 1024px) {
        color: #ffffff;
    }
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            .menu-word {
                transform: translateX(-10px);
            }
            .menu-icon {
                width: 25px;
            }
        }
    }
    &.open {
        .menu-word {
            @media (max-width: 1024px) {
                color: #ffffff;
            }
        }
        .menu-icon {
            width: 17px;
            div {
                &:nth-of-type(2) {
                    width: 0%;
                    transition: width .3s linear;
                }
                &:first-of-type {
                    transform-origin: 0 100%;
                    transform: rotate(45deg);
                }
                &:last-of-type {
                    transform-origin: -7% -66%;
                    transform: rotate(-45deg);
                }
                @media (max-width: 1024px) {
                    background: #ffffff;
                }
            }
        }
    }
}
.menu-word {
    line-height: 1;
    transition: .3s linear;
}
.menu-icon {
    width: 15px;
    margin-right: 25px;
    transition: width .3s linear;
    div {
        height: 2px;
        background: #272C3A;
        transition: .3s linear;
        @media (min-width: 1024px) {
            background: #ffffff;
        }
    }
}
</style>