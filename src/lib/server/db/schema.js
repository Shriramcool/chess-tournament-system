import {
	pgTable,
	serial,
	text,
	integer,
	timestamp,
	date,
	primaryKey
} from 'drizzle-orm/pg-core';

// Players Table
export const players = pgTable('players', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	rating: integer('rating').default(1000),
	createdAt: timestamp('created_at').defaultNow()
});

// Tournaments Table
export const tournaments = pgTable('tournaments', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	location: text('location').notNull(),
	startDate: date('start_date').notNull(),
	createdAt: timestamp('created_at').defaultNow()
});

// Tournament Players (Many-to-Many)
export const tournamentPlayers = pgTable(
	'tournament_players',
	{
		tournamentId: integer('tournament_id')
			.notNull()
			.references(() => tournaments.id),

		playerId: integer('player_id')
			.notNull()
			.references(() => players.id)
	},
	(table) => ({
		pk: primaryKey({
			columns: [table.tournamentId, table.playerId]
		})
	})
);

// Matches
export const matches = pgTable('matches', {
	id: serial('id').primaryKey(),

	tournamentId: integer('tournament_id')
		.notNull()
		.references(() => tournaments.id),

	player1Id: integer('player1_id')
		.notNull()
		.references(() => players.id),

	player2Id: integer('player2_id')
		.notNull()
		.references(() => players.id),

	winnerId: integer('winner_id').references(() => players.id),

	round: integer('round').default(1),

	playedAt: timestamp('played_at').defaultNow()
});