<script>
    import Sidemenu from '$lib/components/Sidemenu.svelte'
    import Navbar from '$lib/components/Navbar.svelte'
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    let open = false


    let images = [
        {
            "firstImage":"src/lib/images/slider-img/first-slider.jpg",
            "secondImage":"src/lib/images/slider-img/first-slider-2.jpg",
            "thirdImage":"src/lib/images/slider-img/first-slider-3.jpg",
            "refNumber": "Ref. 6687/787",
            "nameStuff": "White loose dress"
        },
        {
            "firstImage":"src/lib/images/slider-img/second-slider.jpg",
            "secondImage":"src/lib/images/slider-img/second-slider-2.jpg",
            "thirdImage":"src/lib/images/slider-img/second-slider-3.jpg",
            "refNumber": "Ref. 5542/932",
            "nameStuff": "Blue loose dress"
        },
        {
            "firstImage":"src/lib/images/slider-img/third-slider.jpg",
            "secondImage":"src/lib/images/slider-img/third-slider-2.jpg",
            "thirdImage":"src/lib/images/slider-img/third-slider-3.jpg",
            "refNumber": "Ref. 1213/787",
            "nameStuff": "Red loose dress"
        },

    ];

    const options = {
        rewind: true,
        arrows: true,
        speed: 2000,
        type: 'loop',
        gap: '10px'
    }
</script>

<div class="website-header md:h-screen relative flex flex-col justify-between">
    <div class="preloader-box hidden md:flex items-center justify-center">
        <div class="preloader-box__title overflow-hidden">
            <div class="preloader-box__text">Summer 2020</div>
        </div>
    </div>
    <Sidemenu bind:open/>
    <Navbar bind:sidemenu={open}/>
    <div class="heading-box flex flex-col justify-between relative">
        <div class="heading-box__pretitle w-full">Summer Collection 2020</div>
        <h1 class="heading-box__title w-full">Summer 2020</h1>
        <ul class="social-list flex relative">
            <li class="social-list__item uppercase">
                <a href="/" class="social-list__link">Fb</a>
            </li>
            <li class="social-list__item uppercase">
                <a href="/" class="social-list__link">Pin</a>
            </li>
            <li class="social-list__item uppercase">
                <a href="/" class="social-list__link">Ig</a>
            </li>
        </ul>
    </div>
    <div class="image-slider md:absolute w-full">
        <Splide
            class="splide--dynamic"
            options={ options }
            aria-labelledby="dynamic-slides-example-heading"
            hasTrack={ false }
        >
        <div class="custom-wrapper">
            <SplideTrack>
                {#each images as image (image)}
                    <SplideSlide>
                        <div class="images-wrapper md:flex relative">
                            <div class="image-wrapper first-image overflow-hidden md:h-screen">
                                <img class="image-wrapper__img" src="{image.firstImage}" alt="Image" />
                            </div>
                            <div class="second-box flex">
                                <div class="second-box__content relative self-end w-full">
                                    <div class="second-box__wrapper flex lg:block">
                                        <div class="image-wrapper second-image overflow-hidden">
                                            <img class="image-wrapper__img" src="{image.secondImage}" alt="Image" />
                                        </div>
                                        <div class="image-wrapper third-image overflow-hidden">
                                            <img class="image-wrapper__img" src="{image.thirdImage}" alt="Image" />
                                        </div>
                                    </div>
                                    <div class="info-box flex justify-between">
                                        <div class="goods-type flex flex-col lg:flex-row lg:items-center">
                                            <div>{image.refNumber}</div>
                                            <div class="goods-type__line"></div>
                                            <div>{image.nameStuff}</div>
                                        </div>
                                        <a href="/" class="btn-slider overflow-hidden relative font-semibold w-full block uppercase text-center">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                {/each}
            </SplideTrack>
            <div class="custom-control">
                <div class="splide__arrows flex justify-between">
                    <button class="splide__arrow splide__arrow--next">Next</button>
                    <div class="divide-line"></div>
                    <button class="splide__arrow splide__arrow--prev">Previous</button>
                </div>
                <div class="splide__pagination flex justify-between">
                    <li style="display: none"><button><button></li>
                </div>
                <div>
            </div>
        </div>
        </Splide>
    </div>
</div>


<style lang="scss">
.website-header {
    background: #F7EEE4;
    padding: 60px 24px;
    @media (min-width: 768px) {
        padding: 60px 40px;
    }   
}
.heading-box {
    z-index: 5;
    margin-top: 60px;
    @media (min-width: 1024px) {
        color: #ffffff;
        max-width: 520px;
        height: 62vh;
        margin: 0;
    }
    &__pretitle {
        font-size: 14px;
        @media (min-width: 1024px) {
            max-width: 70px;
        }
    }
    &__title {
        font-size: 60px;
        line-height: 1;
        letter-spacing: 1.5px;
        font-family: "Karlotte";
        margin-top: 16px;
        @media (min-width: 1440px) {
            font-size: 120px;
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
            font-size: 90px;
        }
    }
}
.social-list {
    margin-top: 40px;
    &__item {
        transition: .3s linear;
        line-height: 1;
        @media (min-width: 1024px) {
            color: #ffffff;
        }
        &:nth-of-type(n+2) {
            margin-left: 30px;
        }
        @media (hover: hover) and (pointer: fine) {
            &:hover {
                opacity: .65;
            }
        }
    }
}
.image-slider {
    margin-top: 50px;
    @media (min-width: 1024px) {
        top: 0;
        left: 0;
        margin: 0;
    }
}
.first-image {
    width: 100%;
    @media (min-width: 1440px) {
        width: 60vw;
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 50vw;
    }
    @media (max-width: 1023px) {
        height: 350px;
    }
}
.second-box {
    width: 100%;
    @media (min-width: 1440px) {
        width: 40vw;
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 50vw;
    }
    @media (min-width: 1024px) {
        padding: 0 40px 60px 60px;
    }
    .image-wrapper__img {
        @media (min-width: 1024px) {
            transition: .8s linear;
            transition-timing-function: cubic-bezier(0.1, 0.1, 0.25, 1.0);
            transform: translateY(100%);
        }
    }
}
.second-image {
    height: 300px;
    width: 50%;
    @media (min-width: 1440px) {
        height: 300px;
        width: 220px;
        margin-left: 7vw;
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        margin-bottom: 20px;
        height: 50vh;
        width: 20vw;
    }
    .image-wrapper__img {
        transition: .7s linear;
    }
}
.third-image {
    height: 300px;
    width: 50%;
    @media (min-width: 1440px) {
        width: 190px;
        height: 280px;
        transform: translateY(63px);
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 20vw;
        height: 45vh;
        margin-left: 7vw;
        transform: translateY(-50px);
    }
}
.info-box {
    margin-top: 30px;
    @media (min-width: 1024px) {
        margin: 0;
    }
    @media (max-width: 576px) {
        flex-direction: column;
    }
}
.image-wrapper {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
}
.custom-control {
    @media (min-width: 1440px) {
        left: calc(60vw - 220px);
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        left: calc(50vw - 220px);
    }
    @media (min-width: 1024px) {
        position: absolute;
        z-index: 5;
        bottom: 60px;
        height: 60vh;
        width: 200px;
    }
}
.splide__arrow {
    background: transparent;
    display: block;
    outline: none;
    height: auto;
    opacity: 1;
    transform: none;
    width: auto;
    position: relative;
    @media (min-width: 1024px) {
        color: #ffffff;
    }
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            opacity: .65;
        }
    }
    &:focus {
        background: transparent;
    }
    &--prev {
        left: auto;
        right: 0;
    }
    &--next {
        left: 0;
        right: auto;
    }
}
.divide-line {
    height: 2px;
    width: 80px;
    background: currentColor;
    display: block;
    transform: translateY(11px);
    @media (min-width: 1024px) {
        background: #ffffff;
    }
}
.splide__pagination {
    display: none;
    @media (min-width: 1024px) {
        justify-content: space-between;
        padding: 0;
    }
}
.goods-type {
    transition: .3s linear;
    @media (min-width: 1440px) {
        transform: rotate(90deg);
        transform-origin: 100% 100%;
        bottom: 260px;
        right: 25px;
        position: absolute;
    }
    @media (min-width: 1024px) {
        opacity: 0;
    }
    &__line {
        display: none;
        @media (min-width: 1440px) {
            width: 80px;
            margin: 0 25px;
            height: 1px;
            background: currentColor;
            display: block;
        }
    }
}
.btn-slider {
    border: 1px solid #58514C;
    padding: 20px 30px;
    font-size: 14px;
    transition: .3s linear;
    color: #58514C;
    margin-top: 20px;
    max-width: 100%;
    @media (min-width: 1024px) {
        margin: 0 0 0 auto;
    }
    @media (min-width: 1024px) {
        opacity: 0;
    }
    @media (min-width: 577px) {
        max-width: 240px;
    }
    @media (min-width: 577px) and (max-width: 1023px) {
        margin: 0;
    }
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: #ffffff;
            &:after {
                transform: translateY(0%);
            }
        }
    }
    &:after {
        content: '';
        position: absolute;
        display: block;
        background: #58514C;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: .3s linear;
        z-index: -1;
    }
}
.is-visible {
    .second-box {
        @media (min-width: 1024px) {
            .image-wrapper__img {
                transform: translateY(0%);
            }
            .btn-slider, .goods-type {
                opacity: 1;
            }
        }
    }
}
.splide__arrows {
    margin-top: 40px;
    @media (min-width: 1024px) {
        margin: 0;
    }
}
.preloader-box {
    height: 100%;
    width: 100%;
    position: absolute;
    background: #B29A7C;
    top: 0;
    left: 0;
    z-index: 30;
    animation-name: preloaderScreen;
    animation-delay: 2s;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    &__title {
        color: #ffffff;
        font-size: 80px;
        font-family: "Karlotte";
        letter-spacing: 2px;
    }
    &__text {
        animation-name: preloaderTitle;
        animation-delay: .3s;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        transform: translateY(100%);
    }
}
</style>