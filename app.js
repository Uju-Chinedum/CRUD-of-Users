const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.listen(5000, console.log("Server is listening on port 5000..."));
