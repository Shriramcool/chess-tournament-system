<script>
	let { children } = $props();
</script>

<nav>
	<h1>Chess Tournament Management System</h1>

	<div>
		<a href="/players">Players</a>
		|
		<a href="/tournaments">Tournaments</a>
		|
		<a href="/tournament-players">Add Players</a>
		|
		<a href="/matches">Matches</a>
		|
		<a href="/leaderboard">Leaderboard</a>
	</div>
</nav>

<hr />

<main>
	{@render children()}
</main>