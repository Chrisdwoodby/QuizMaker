import React, {useState} from 'react';

const Question = function(props) {

  var [selected, selectAnswer] = useState('');

  const answerQuestion = function() {
    if (selected === props.data[0].correct) {
      var newScore = props.score + 20;
      props.updateScore(newScore);
    }
  }
  
  const handleSubmit = function() {
    var next = props.data.slice(1);
    if (next.length) {
      answerQuestion();
      props.updateData(next);
      props.renderAuth();
      console.log(props.score);
    } else {
      props.setQuestion(false);
      props.setWelcome(false);
      props.setRestart(true);
      selectAnswer('');
      props.renderAuth();
    }
  }

  return (
    <div>
      <h1>Question</h1>
      <h3 class="question">{props.data[0].question}</h3>
      <div class="options">
        <tr>
          <td>
            <input type="radio" name="choice" value={props.data[0].answers[0]} onChange={event => selectAnswer(event.target.value)}/>
            {props.data[0].answers[0]}
          </td>
        </tr>
        <tr>
          <td>
            <input type="radio" name="choice" value={props.data[0].answers[1]} onChange={event => selectAnswer(event.target.value)}/>
              {props.data[0].answers[1]}
          </td>
        </tr>
        <tr>
          <td>
            <input type="radio" name="choice" value={props.data[0].answers[2]} onChange={event => selectAnswer(event.target.value)}/>
            {props.data[0].answers[2]}
          </td>
        </tr>
        <tr>
          <td>
            <input type="radio" name="choice" value={props.data[0].answers[3]} onChange={event => selectAnswer(event.target.value)}/>
            {props.data[0].answers[3]}
          </td>
        </tr>
      </div>
      <button class="next" type="submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Question;
