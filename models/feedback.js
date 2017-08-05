const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    date: {
      type: Date,
      default: Date.now 
    },

    feedbackText: String,

    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz"
    }

});

module.exports = mongoose.model("Feedback", FeedbackSchema);