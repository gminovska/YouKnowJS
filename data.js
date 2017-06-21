const mongoose = require('mongoose');
const Quiz = require('./models/quiz');

var quizzes = [{
    "name" : "Up & Going",
    "description" : "Test the concepts discussed in the You Don't Know JS series' first book - Up & Going: basic programming building blocks such as expressions, statements, operators, types, RHS and LHS assignment",
    "imageURL" : "http://someplace.com/",
    "numberOfQuestions" : 5,
    "resource" : "You Don't Know JS",
    "questions" : [ 
        {
            "text" : "Which of the following is not a 'falsy' value?\n Select all that apply",
            "questionType" : "multi-choice",
            "answers" : [ 
                {
                    "_id": 1,
                    "text" : "\"\" (empty string)"
                }, 
                {
                    "_id": 2,
                    "text" : "0"              
                }, 
                {
                    "_id": 3,
                    "text" : "NaN"                  
                }, 
                {
                    "_id": 4,
                    "text" : "[] (empty array)"
                }, 
                {
                    "_id": 5,
                    "text" : "null"     
                }, 
                {
                    "_id": 6,
                    "text" : "{} (empty object)"               
                }, 
                {
                    "_id": 7,
                    "text" : "undefined",
                }
            ],
            "correctAnswer": [4,6],
            "explanation" : "If objects (arrays are specialized objects) are coerced to boolean values, they are always coerced to TRUE.",
            "source" : "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#truthy--falsy"
        },
        {
            "text" : "Map the following to their English language analogies: Expressions, Statements, Program",
            "questionType" : "regular",
            "answers" : [ 
                {
                    "_id": 1,
                    "text" : "Words,Sentences,Essay"
                }, 
                {
                    "_id": 2,
                    "text" : "Sentences,Words,Essay"
                }, 
                {
                    "_id": 3,
                    "text" : "Essay,Sentences,Words"
                }
            ],
            "correctAnswer": [1],
            "explanation" : "In a computer language, a group of words, numbers, and operators that performs a specific task is a statement. Statements are made up of one or more expressions. A programme is made up up of one or more statements.",
            "source" : "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#statements"
        }, 
        {
            "text" : "If you use the == loose equals operator to make the comparison \"99.99\" == 99.99, JavaScript will convert the left-hand side \"99.99\" to its number equivalent 99.99. \nThis is known as:",
            "questionType" : "regular",
            "answers" : [ 
                {
                    "_id": 1,
                    "text" : "Conversion"
                }, 
                {
                    "_id": 2,
                    "text" : "Implicit coercion"
                }, 
                {
                    "_id": 3,
                    "text" : "Explicit coercion"    
                }, 
                {
                    "_id": 4,
                    "text" : "Magic"
                }
            ],
            "explanation" : "When comparing the string ‘99.99’ to the number 99.99, most people would agree they are equivalent. But they're not exactly the same. It's the same value in two different representations, two different types. You could say they're \"loosely equal,\" couldn't you?\n To help you out in these common situations, JavaScript will sometimes kick in and implicitly coerce values to the matching types.\n While designed to help you, implicit coercion can create confusion if you haven't taken the time to learn the rules that govern its behavior. Most JS developers never have, so the common feeling is that implicit coercion is confusing and harms programs with unexpected bugs, and should thus be avoided. It's even sometimes called a flaw in the design of the language.",
            "source" : "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#converting-between-types"
        }, 
        {
            "text" : "What does typeof null return?",
            "questionType" : "regular",
            "answers" : [ 
                {
                    "_id": 1,
                    "text" : "String"
                }, 
                {
                    "_id": 2,
                    "text" : "Boolean"
                }, 
                {
                    "_id": 3,
                    "text" : "Number"
                }, 
                {
                    "_id": 4,
                    "text" : "Object"
                }
            ],
            "correctAnswer": [4],
            "explanation" : "typeof null erroneously returns \"object\", when you'd expect it to return \"null\".  This is a long-standing bug in JS, but one that is likely never going to be fixed. Too much code on the Web relies on the bug and thus fixing it would cause a lot more bugs! ",
            "source" : "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#values--types"
        }, 
         
        {
            "text" : "In JavaScript, variable names (including function names) must be valid identifiers. An identifier can start with either:",
            "questionType" : "regular",
            "answers" : [ 
                {
                    "_id": 1,
                    "text" : "a-z"         
                }, 
                {
                    "_id": 2,
                    "text" : "A-Z"
                    
                }, 
                {
                    "_id": 3,
                    "text" : "_ or $"
                   
                }, 
                {
                    "_id": 4,
                    "text" : "All of the above"
                    
                }
            ],
            "correctAnswer": [4],
            "explanation" : "An identifier must start with, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.",
            "source" : "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#variables"
        }
    ]
}
];

function populateDatabase() {
    Quiz.remove({}, (err, result) =>{
        if(err) {
            console.log(err);
        } else {
            console.log("All quizzes removed");
        }
    });

    quizzes.forEach((quiz) => {
        console.log("quiz about to be added..or not");
        Quiz.create(quiz, (err, result) =>{
            if(err) {
            console.log(err);
        } else {
            console.log("Quiz added");
        }
        })
    });
    
}

module.exports = populateDatabase;
