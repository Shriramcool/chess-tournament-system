import { db } from '$lib/server/db';
import { players } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function load({ params }) {
	const id = Number(params.id);

	const player = await db
		.select()
		.from(players)
		.where(eq(players.id, id));

	return {
		player: player[0]
	};
}

export const actions = {
	update: async ({ request, params }) => {
		const data = await request.formData();

		await db
			.update(players)
			.set({
				name: data.get('name'),
				email: data.get('email'),
				rating: Number(data.get('rating'))
			})
			.where(eq(players.id, Number(params.id)));
	}
};