const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
    },
    birthday: {
        type: String,
        required: [true, "Please provide a date of birth"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        trim: true,
    },
    zipCode: {
        type: String,
        trim: true,
    },
    street: {
        type: String,
        required: [true, "Please provide a street name"],
        trim: true,
    },
    number: {
        type: String,
        trim: true,
    },
    neighbourhood: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        required: [true, "Please provide a city"],
        trim: true,
    },
});

module.exports = mongoose.model("User", UserSchema);
