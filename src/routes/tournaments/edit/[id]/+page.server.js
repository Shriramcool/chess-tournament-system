import { db } from '$lib/server/db';
import { tournaments } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';


export async function load({ params }) {

	const id = Number(params.id);

	const tournament = await db
		.select()
		.from(tournaments)
		.where(eq(tournaments.id, id));


	return {
		tournament: tournament[0]
	};
}


export const actions = {

	update: async ({ request, params }) => {

		const data = await request.formData();


		await db
			.update(tournaments)
			.set({

				name: data.get('name'),

				location: data.get('location'),

				startDate: data.get('startDate')

			})
			.where(
				eq(tournaments.id, Number(params.id))
			);

	}

};