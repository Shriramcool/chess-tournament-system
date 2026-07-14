import { db } from '$lib/server/db';
import { tournaments, tournamentPlayers, matches } from '$lib/server/db/schema';
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

	create: async ({ request }) => {

		const data = await request.formData();

		await db.insert(tournaments).values({

			name: data.get('name'),

			location: data.get('location'),

			startDate: data.get('startDate')

		});

	},


	delete: async ({ request }) => {

		const data = await request.formData();

		const id = Number(data.get('id'));


		// delete matches of this tournament first
		await db
			.delete(matches)
			.where(
				eq(matches.tournamentId, id)
			);


		// remove players from tournament
		await db
			.delete(tournamentPlayers)
			.where(
				eq(tournamentPlayers.tournamentId, id)
			);


		// delete tournament
		await db
			.delete(tournaments)
			.where(
				eq(tournaments.id, id)
			);

	}

};