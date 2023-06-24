require("dotenv").config();
// require("express-async-errors");
// async errors
const express = require("express");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db/connectDB");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/users", usersRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        // connectDB
        // await connectDB(process.env.MONGO_URI);

        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
