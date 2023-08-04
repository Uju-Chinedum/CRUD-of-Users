const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide valid email",
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6,
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

AccountSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordConfirm = this.password;
});

module.exports = mongoose.model("User", UserSchema);
