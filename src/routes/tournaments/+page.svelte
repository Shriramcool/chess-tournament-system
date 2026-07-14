<script>
	let { data } = $props();
</script>


<h1>Tournament Management</h1>


<h2>Create Tournament</h2>

<form method="POST" action="?/create">

	<input 
		name="name"
		placeholder="Tournament name"
		required
	/>

	<input
		name="location"
		placeholder="Location"
		required
	/>

	<input
		name="startDate"
		type="date"
		required
	/>

	<button type="submit">
		Add Tournament
	</button>

</form>


<hr />


<h2>Tournaments</h2>


<table border="1" cellpadding="8">

	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Location</th>
			<th>Date</th>
			<th>Action</th>
		</tr>
	</thead>


	<tbody>

		{#each data.tournaments as tournament (tournament.id)}

		<tr>

			<td>{tournament.id}</td>

			<td>{tournament.name}</td>

			<td>{tournament.location}</td>

			<td>{tournament.startDate}</td>


			<td>

	    <a href={`/tournaments/edit/${tournament.id}`}>
	    	Edit
	    </a>


	<form method="POST" action="?/delete">

		<input
			type="hidden"
			name="id"
			value={tournament.id}
		/>

		<button>
			Delete
		</button>

	</form>

</td>

		</tr>

		{/each}

	</tbody>

</table>