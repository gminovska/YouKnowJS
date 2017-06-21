const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    numberOfQuestions: Number,
    resource: String,
    questions: [
        {
            text: String,
            questionType: String,
            answers: [
                {
                    _id: Number,
                    text: String
                }
            ],
            correctAnswer: [Number],
            explanation: String,
            source: String
        }
    ]   
});

module.exports = mongoose.model("Quiz", QuizSchema);