# CRUD of Users

This repository provides a Node.js and MongoDB application that creates a CRUD of users with various routes. The program offers a RESTful API for performing CRUD operations on a MongoDB database.

## Installation

1. `git clone https://github.com/Uju-Chinedum/CRUD-of-Users.git`

2. `cd CRUD-of-Users`

3. `npm install`

4. Create a MongoDB database locally or via a cloud-based service. Make a note of the URL for the connection.

5. In the project root directory, create a `.env` file and add the following environment variables:\
`PORT=3000`\
`MONGODB_URI=<your-mongodb-connection-url>`\
Replace `<your-mongodb-connection-url>` with your actual MongoDB connection URL.

## Usage

To start the application, run the following command: `npm start`.\
The application will be available at <http://localhost:3000>.

## Routes

The program provides the following routes:

- **GET /api/v1/users**: Fetches all users from the database.
- **POST /api/v1/users**: Creates all new user.
- **GET /api/v1/users/:id**: Fetches a specific user by their ID.
- **PATCH /api/v1/users/:id**: Updates a user's by their ID.
- **DELETE /api/v1/users/:id**: Deletes a user by their ID.

## License

This project is licensed under the **[MIT License](https://mit-license.org/)**

## Resources

- [Node.js](nodejs.org) - Official website for Node.js
- [NPM](npmjs.com) - Official website for NPM
- [Express.js](expressjs.com) - Official website for Express.js
- [MongoDB](mongodb.com) - Official website for MongoDB
- [Mongoose.js](mongoosejs.com) - Official website for Mongoose
