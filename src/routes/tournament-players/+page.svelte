<script>
	let { data } = $props();
</script>


<h1>Add Players To Tournament</h1>


<form method="POST" action="?/add">


<label>
	Tournament
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


<label>
	Player
</label>

<br />


<select name="playerId">

	{#each data.players as player (player.id)}

	<option value={player.id}>
		{player.name}
	</option>

	{/each}

</select>


<br /><br />


<button type="submit">
	Add Player
</button>


</form>