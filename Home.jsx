import React, {useState} from 'react';
import Question from './Question.jsx';
import Welcome from './Welcome.jsx';
import Restart from './Restart.jsx';

const printStatement = () => {
    return 'this is a sample react application.'
}


const Home = (props) => {

  const [renderWelcome, setWelcome] = useState(true);
  const [renderQuestion, setQuestion] = useState(false);
  const [score, updateScore] = useState(0);
  const [data, updateData] = useState([]);
  const [renderRestart, setRestart] = useState(false);

  
  var quiz = [
    {
      question: 'Which is the largest country in the world by population?',
      answers: ['india', 'USA', 'China', 'Russia'],
      correct: 'China'
    },
    {
      question: 'When did the second world war end?',
      answers: ['1945', '1939', '1944', '1942'],
      correct: '1945'
    },
    {
      question: 'Which was the first country to issue paper currency?',
      answers: ['France', 'USA', 'China', 'Italy'],
      correct: 'China'
    },
    {
      question: 'Which city hosted the 1996 Summer Olympics?',
      answers: ['Atlanta', 'Sydney', 'Athens', 'Beijing'],
      correct: 'Atlanta'
    },
    {
      question: 'Who invented the telephone?',
      answers: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
      correct: 'Alexander Graham Bell'
    }
  ]

  const renderAuth = function() {

    if (renderWelcome) {
      return <Welcome updateData={updateData} quiz={quiz}  renderAuth={renderAuth} setWelcome={setWelcome} setQuestion={setQuestion}/>
    } else if (renderQuestion) {
      return <Question setRestart={setRestart} updateData={updateData} data={data} score={score} updateScore={updateScore} renderAuth={renderAuth} setWelcome={setWelcome} setQuestion={setQuestion}/>
    } else if (renderRestart) {
      return <Restart renderRestart={renderRestart} setRestart={setRestart} score={score} updateScore={updateScore} renderAuth={renderAuth} setWelcome={setWelcome} setQuestion={setQuestion}/>
    }
  }

  return (
  <>
    {renderAuth()}
  </>
  )
}


export default Home;
