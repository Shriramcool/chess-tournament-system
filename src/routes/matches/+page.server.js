import { db } from '$lib/server/db';
import {
	tournaments,
	tournamentPlayers,
	matches
} from '$lib/server/db/schema';

import { eq } from 'drizzle-orm';


export async function load() {

	const allTournaments = await db
		.select()
		.from(tournaments);


	return {
		tournaments: allTournaments
	};
}


export const actions = {

	generate: async ({ request }) => {

		const data = await request.formData();

		const tournamentId = Number(
			data.get('tournamentId')
		);


		const players = await db
			.select()
			.from(tournamentPlayers)
			.where(
				eq(
					tournamentPlayers.tournamentId,
					tournamentId
				)
			);


		for(let i = 0; i < players.length; i += 2){

			if(!players[i + 1]) break;


			const player1 = players[i].playerId;

			const player2 = players[i + 1].playerId;


			const winner =
				Math.random() < 0.5
				? player1
				: player2;


			await db.insert(matches).values({

				tournamentId,

				player1Id: player1,

				player2Id: player2,

				winnerId: winner,

				round: 1

			});

		}

	}

};