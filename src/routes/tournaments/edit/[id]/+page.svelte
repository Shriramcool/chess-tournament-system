<script>
	let { data } = $props();
</script>


<h1>Edit Tournament</h1>


<form method="POST" action="?/update">


	<label>Name</label>
	<br />

	<input
		name="name"
		value={data.tournament.name}
		required
	/>


	<br /><br />


	<label>Location</label>
	<br />

	<input
		name="location"
		value={data.tournament.location}
		required
	/>


	<br /><br />


	<label>Date</label>
	<br />

	<input
		type="date"
		name="startDate"
		value={data.tournament.startDate}
		required
	/>


	<br /><br />


	<button type="submit">
		Update Tournament
	</button>


</form>