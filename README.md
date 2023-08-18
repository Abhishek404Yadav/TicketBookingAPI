# Movie Theater Management System

Welcome to the Movie Theater Management System, a comprehensive application providing APIs for seamless management of movies, theaters, show timings, screens, and seat reservations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Movie Theater Management System is designed to simplify and enhance the management of cinema operations. It offers a set of APIs that allow users to interact with various aspects of the cinema, from adding movies and theaters to reserving seats for screenings.

## Features

- Manage movies: Add, update, delete movies.
- Manage theaters: Add, update, delete theaters.
- Manage show timings: Add, update, delete show timings.
- Manage screens: Add, update, delete screens.
- Reserve seats: Reserve seats for a specific screening.
- View available seats: Check available seats for a particular screening.
- View show timings: Get show timings for a specific movie.
- Manage theaters: Add, list theaters, get theater details.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd movie-theater-management
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Set up the database connection in `.env` file (create if not present). Example:
   ```
   DB_HOST=localhost
   DB_USER=username
   DB_PASSWORD=password
   DB_DATABASE=database_name
   ```

5. Start the server:
   ```sh
   npm start
   ```

## Dependencies

- [Chance](https://www.npmjs.com/package/chance): Random data generator library.
- [Dotenv](https://www.npmjs.com/package/dotenv): Environment variable loader.
- [Express](https://www.npmjs.com/package/express): Web application framework for Node.js.
- [MySQL2](https://www.npmjs.com/package/mysql2): MySQL client for Node.js.
- [Node.js](https://nodejs.org/): JavaScript runtime.
- [Path](https://nodejs.org/api/path.html): Path manipulation utility.
- [Sequelize](https://www.npmjs.com/package/sequelize): Promise-based Node.js ORM.
- [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli): Command-line interface for Sequelize.

## API Endpoints

- **Movies:**
  - `GET /movies`: List all movies.
  - `POST /movies`: Add a new movie.

- **Screens:**
  - `POST /screen`: Add a new screen.

- **Seats:**
  - `POST /seat`: Reserve a seat.
  - `GET /seat`: Get available seats.

- **Show Timings:**
  - `GET /:movieId/showTimings`: List all show timings for a movie.
  - `POST /showTimings`: Add a new show timing.

- **Theaters:**
  - `GET /theaters`: List all theaters.
  - `POST /theaters`: Add a new theater.
  - `GET /theaters/:theaterId`: Get theater details.

## Database Structure

The project's database comprises tables such as:
- `movies`
- `theaters`
- `showTimings`
- `screens`
- `seats`

Refer to the `models` directory for detailed information on the database schema.

## Usage

1. Explore the API documentation to understand endpoints and request/response formats.

2. Utilize tools like Postman or cURL to make requests to API endpoints.

3. Manage movies, theaters, show timings, screens, and seat reservations using the API.

## Contributing

Contributions to this project are encouraged! Feel free to submit pull requests to address issues or add new features.
