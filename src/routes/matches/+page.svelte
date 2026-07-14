<script>
	let { data } = $props();
</script>


<h1>Match System</h1>


<h2>Generate Random Matches</h2>


<form method="POST" action="?/generate">

	<label>
		Select Tournament
	</label>

	<br />


	<select name="tournamentId">

		{#each data.tournaments as tournament (tournament.id)}

			<option value={tournament.id}>
				{tournament.name}
			</option>

		{/each}

	</select>


	<br /><br />


	<button type="submit">
		Generate Matches
	</button>


</form>