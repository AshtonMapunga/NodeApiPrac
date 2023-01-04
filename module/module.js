const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reqiured: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

userSchema.plugin(uniqueValidator, { message: "Email already in use" })
const User = mongoose.model("user", userSchema);
module.exports = User;