<script>
    import Hamburger from '$lib/components/Hamburger.svelte'
    import Multilang from '$lib/components/Multilang.svelte'

	export let sidemenu = false
</script>

<div class="website-header__nav relative flex justify-between">
    <Hamburger bind:open={sidemenu}/>
    <Multilang />
</div>


<style lang="scss">

</style>