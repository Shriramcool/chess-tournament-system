# Chess Tournament Management System

A web-based Chess Tournament Management System built using **SvelteKit**, **PostgreSQL**, and **Drizzle ORM**.

This project allows tournament organizers to manage players, create tournaments, assign players, generate matches, record results, and view final rankings.

---

## Tech Stack

### Frontend
- SvelteKit
- Svelte 5
- Tailwind CSS

### Backend
- SvelteKit Server Routes
- Drizzle ORM

### Database
- PostgreSQL

### Tools
- Node.js
- npm
- Git

---

# Features Implemented

## 1. Player Management

- Create new players
- View all players
- Update player details
- Delete players
- Store player information in PostgreSQL database

Player details include:
- Name
- Email
- Rating

---

## 2. Tournament Management

- Create tournaments
- View tournaments
- Update tournament details
- Delete tournaments
- Store tournament information in PostgreSQL database

Tournament details include:
- Tournament name
- Location
- Start date

---

## 3. Add Players To Tournament

- Assign players to tournaments
- Maintain tournament-player relationships
- Store player participation data

---

## 4. Match System

- Generate random matches for tournament players
- Randomly pair players
- Randomly select match winners
- Store match results in database

---

## 5. Ranking System

- Calculate player rankings based on match wins
- Display final top 3 rankings:

1. First Place
2. Second Place
3. Third Place

---

# Project Setup

## Prerequisites

Make sure you have installed:

- Node.js
- PostgreSQL

Check versions:

```bash
node -v
```

```bash
npm -v
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Go inside project folder:

```bash
cd chess-tournament-system
```

Install dependencies:

```bash
npm install
```

---

# Database Setup

Create a PostgreSQL database.

Example:

```
chess_tournament
```

Create `.env` file in the project root:

```env
DATABASE_URL="postgres://username:password@localhost:5432/chess_tournament"
```

Replace:

- username
- password
- database name

with your PostgreSQL credentials.

---

# Database Migration

Push database schema:

```bash
npm run db:push
```

This will create required tables:

- players
- tournaments
- tournament_players
- matches

---

# Run Application

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# Available Routes

## Players

```
/players
```

Manage players.

---

## Tournaments

```
/tournaments
```

Manage tournaments.

---

## Add Players

```
/tournament-players
```

Assign players to tournaments.

---

## Matches

```
/matches
```

Generate tournament matches and store results.

---

## Rankings

```
/leaderboard
```

View final rankings.

---

# Database Tables

## Players

Stores player information.

Fields:

- id
- name
- email
- rating
- created_at


## Tournaments

Stores tournament information.

Fields:

- id
- name
- location
- start_date
- created_at


## Tournament Players

Stores player participation.

Fields:

- tournament_id
- player_id


## Matches

Stores match results.

Fields:

- id
- tournament_id
- player1_id
- player2_id
- winner_id
- round
- played_at


---

# Environment Variables

Do not commit `.env` file.

Use:

```
.env.example
```

for sharing required environment variables.

---

