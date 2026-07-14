import { db } from '$lib/server/db';
import {
	tournaments,
	players,
	tournamentPlayers
} from '$lib/server/db/schema';


export async function load() {

	const allTournaments = await db
		.select()
		.from(tournaments);


	const allPlayers = await db
		.select()
		.from(players);


	return {
		tournaments: allTournaments,
		players: allPlayers
	};

}


export const actions = {

	add: async ({ request }) => {

		const data = await request.formData();


		await db.insert(tournamentPlayers).values({

			tournamentId: Number(
				data.get('tournamentId')
			),

			playerId: Number(
				data.get('playerId')
			)

		});

	}

};