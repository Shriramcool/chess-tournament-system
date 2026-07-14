<script>
	let { data } = $props();
</script>


<h1>Final Rankings</h1>


<table border="1" cellpadding="8">

	<thead>
		<tr>
			<th>Position</th>
			<th>Player</th>
			<th>Wins</th>
		</tr>
	</thead>


	<tbody>

		{#each data.ranking as player, index (player.name)}

			<tr>

				<td>
					{index + 1}
				</td>

				<td>
					{player.name}
				</td>

				<td>
					{player.wins}
				</td>

			</tr>

		{/each}

	</tbody>

</table>