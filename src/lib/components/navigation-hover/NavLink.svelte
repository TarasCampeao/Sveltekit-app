<script>
	let keys = ['Animation', 'Branding', 'Illustration'];
	function setKey(key, value) {
		
	}
</script>

{#each keys as key (key)}
	<slot {key} />
{/each}