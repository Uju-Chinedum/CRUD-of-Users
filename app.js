require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db/connectDB");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/users", usersRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port));
    } catch (error) {
        console.log(error);
    }
};

start();
