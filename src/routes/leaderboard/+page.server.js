import { db } from '$lib/server/db';
import { players, matches } from '$lib/server/db/schema';


export async function load() {

	const allPlayers = await db
		.select()
		.from(players);


	const allMatches = await db
		.select()
		.from(matches);


	let ranking = [];


	for (const player of allPlayers) {

		const wins = allMatches.filter(
			(match) => match.winnerId === player.id
		).length;


		ranking.push({
			name: player.name,
			wins
		});
	}


	ranking.sort(
		(a, b) => b.wins - a.wins
	);


	return {
		ranking: ranking.slice(0, 3)
	};

}