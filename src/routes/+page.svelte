<script lang="ts">

	let t = []
	while (t.length < 100){
		t.push(t.length)
	}
</script>

{#each t as item,i}
	  <hr>
	  {i}
{/each}