<div class="multi-lang flex relative">
    <div class="multi-lang__item uppercase cursor-pointer active">Eng</div>
    <div class="multi-lang__item uppercase cursor-pointer">Fr</div>
</div>

<style lang="scss">
.multi-lang {
    z-index: 5;
    &__item {
        color: #c2b2a6;
        transition: .3s linear;
        line-height: 1;
        &:nth-of-type(n+2) {
            margin-left: 30px;
        }
        &.active {
            color: #272C3A;
            text-shadow: 1px 0 0 #272C3A;
        }
        &:hover {
            color: #272C3A;
            text-shadow: 1px 0 0 #272C3A;
        }        
    }
}
</style>