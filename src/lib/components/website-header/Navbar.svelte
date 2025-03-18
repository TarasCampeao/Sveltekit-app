<script>
    import Hamburger from '$lib/components/website-header/Hamburger.svelte'
    import Multilang from '$lib/components/website-header/Multilang.svelte'

	export let sidemenu = false
</script>

<div class="website-header__nav relative flex justify-between">
    <Hamburger bind:open={sidemenu}/>
    <Multilang />
</div>


<style lang="scss">

</style>