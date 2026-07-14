<script>
	let { data } = $props();
</script>

<h1 class="text-3xl font-bold mb-6">
	Player Management
</h1>

<h2>Add Player</h2>

<form method="POST" action="?/create">
	<input name="name" placeholder="Name" required />
	<input name="email" placeholder="Email" required />
	<input name="rating" type="number" value="1000" required />
	<button type="submit">Add Player</button>
</form>

<hr />

<h2>Players</h2>

<table border="1" cellpadding="8">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Email</th>
			<th>Rating</th>
			<th>Actions</th>
		</tr>
	</thead>

	<tbody>
		{#each data.players as player (player.id)}
			<tr>
				<td>{player.id}</td>

				<td>{player.name}</td>

				<td>{player.email}</td>

				<td>{player.rating}</td>

				
				<td> 
					<a href={`/players/edit/${player.id}`}>
					Edit
					</a>
					<form method="POST" action="?/delete">
						<input type="hidden" name="id" value={player.id} />
						<button type="submit">Delete</button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>