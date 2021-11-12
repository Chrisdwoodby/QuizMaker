import React from 'react';

const Restart = function(props) {

  const renderRestart = function() {
    props.setQuestion(false);
    props.setWelcome(true);
    props.setRestart(false);
    props.updateScore(0);
    props.renderAuth();
  }
  return (
    <div>
      <h2 class="score">{props.score}</h2>
      <button class="restart" onClick={renderRestart}>Restart</button>
    </div>
    )
}

export default Restart;
