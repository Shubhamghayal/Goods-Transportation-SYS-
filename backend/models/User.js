const mongoose = require("mongoose")

module.exports = mongoose.model("test", mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"]
    },
    email: {
        type: String,
        required: [true, "please provide email"]
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    },
    profile: {
        type: String,

    },
}, { timestamps: true }))  //createat and updatedat keys banavta
