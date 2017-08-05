const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema =  new mongoose.Schema({
    username: String,
    password: String,
    quizzes: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz"
        },
        date: {
            type: Date,
            default: Date.now 
        },
        score: Number
    }]
});

//add passport-local-mongoose plugin for salting and hashing the password
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
