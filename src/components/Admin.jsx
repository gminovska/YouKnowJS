import React from 'react';
import AddQuestion from './AddQuestion';
import TextField from 'material-ui/TextField';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      questions: []
    }
    
  }

  addAnswer = () => {
    this.setState(
      (prevState) => ({
        answers: prevState.answers.concat(["answ"])
      })
    );
  }

  render() {
    return (
      <div>

        <div className="quiz-form">
          <TextField hintText="Quiz name" name="name" id="name" />
          <TextField hintText="Quiz description" 
                     name="description"   
                     id="description" />
          <TextField hintText="img url" name="imageURL" id="imageURL" />
          <TextField hintText="Resource title" name="resource" id="resource" />
          <AddQuestion 
            answers={this.state.answers}
            addAnswer={this.addAnswer} />


        </div>


      </div>
    );
  }
}


export default Admin;
