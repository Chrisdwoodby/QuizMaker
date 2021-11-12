import React, { useState } from 'react';

const Welcome = function (props) {
    
    const startQuiz = function() {
      props.updateData(props.quiz)
      props.setWelcome(false);
      props.setQuestion(true);
      props.renderAuth();
    }

    return (
        <div>
          <h1>Welcome</h1>
          <button class="start" onClick={startQuiz}>Start the Quiz</button>
        </div>
    )
}

export default Welcome;
