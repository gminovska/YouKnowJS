import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Answers = ({answers, checkAnswer, type}) => {
    let i = 0;
    const handleSingleChoice = (e) => e.target.value === "true"
        ? checkAnswer(true)
        : checkAnswer(false);

    const handleMultiChoice = (e) => {
        
        var result = Array
            .from(document.getElementById("answers-form").querySelectorAll("input"))
            .every((current) =>{
                if(current.value && current.checked) {
                    return true;
                } else if(!current.value && !current.checked) {
                    return true;
                }   
            })
               
            
        console.log(result);
        checkAnswer(result);
    }
    return (
        <form id="answers-form">
            {answers.map(answer => {
                return (
                    <div key={i++}>
                        <label>{answer.text}
                            <input
                                name="answers"
                                type={type === 'regular'
                                ? 'radio'
                                : 'checkbox'}
                                value={answer.correct}
                                id={answer.text}
                                onClick={(e) => {
                                if (type === 'regular') {
                                    handleSingleChoice(e)
                                } else {
                                    handleMultiChoice(e)
                                }
                            }}/>
                        </label>
                    </div>
                )
            })}
        </form>
    )
};

const Question = ({
    text,
    submitAnswer,
    answers,
    checkAnswer,
    warning,
    type
}) => {
    console.log(type);
    return (
        <Paper zDepth={2}>
            <h2>{text}</h2>
            <Answers answers={answers} checkAnswer={checkAnswer} type={type}/> {warning
                ? <p className="warning">You need to select an answer!</p>
                : null}
            <RaisedButton label="Submit answer" onTouchTap={submitAnswer}/>
        </Paper>
    );
};

Question.propTypes = {
    text: PropTypes.string.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired,
    checkAnswer: PropTypes.func.isRequired
};

export default Question;
