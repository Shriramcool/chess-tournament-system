<script>
	let { data } = $props();
</script>

<h1>Edit Player</h1>

<form method="POST" action="?/update">

	<label>Name</label>
	<br />
	<input 
		name="name" 
		value={data.player.name} 
		required
	/>

	<br /><br />

	<label>Email</label>
	<br />
	<input 
		name="email" 
		value={data.player.email}
		required
	/>

	<br /><br />

	<label>Rating</label>
	<br />
	<input 
		name="rating" 
		type="number"
		value={data.player.rating}
		required
	/>

	<br /><br />

	<button type="submit">
		Update Player
	</button>

</form>