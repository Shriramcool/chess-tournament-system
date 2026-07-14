import { db } from '$lib/server/db';
import { players } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { tournamentPlayers } from '$lib/server/db/schema';
export async function load() {
	const allPlayers = await db.select().from(players);

	return {
		players: allPlayers
	};
}

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		await db.insert(players).values({
			name: formData.get('name'),
			email: formData.get('email'),
			rating: Number(formData.get('rating'))
		});
	},

	update: async ({ request }) => {
		const formData = await request.formData();

		const id = Number(formData.get('id'));

		await db
			.update(players)
			.set({
				name: formData.get('name'),
				email: formData.get('email'),
				rating: Number(formData.get('rating'))
			})
			.where(eq(players.id, id));
	},

delete: async ({ request }) => {

	const formData = await request.formData();

	const id = Number(formData.get('id'));


	await db
		.delete(tournamentPlayers)
		.where(eq(tournamentPlayers.playerId, id));


	await db
		.delete(players)
		.where(eq(players.id, id));

}
};