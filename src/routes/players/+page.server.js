import { db } from '$lib/server/db';
import { players } from '$lib/server/db/schema';

export async function load() {
	try {
		const allPlayers = await db.select().from(players);

		return {
			players: allPlayers
		};
	} catch (err) {
		console.error('DATABASE ERROR:', err);
		throw err;
	}
}