import './App.css';
import {useEffect, useState} from 'react';
function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correct_answers, setCorrect] = useState(0);
  const [wrong_answers, setWrong] = useState(0);

  useEffect(() => {
    randomizeNum();
  }, [])

  function check(e) {
    e.preventDefault();

    const correct = number1 + number2;
    if (correct === parseInt(answer)) {
      alert("Correct!");
      const corrects = correct_answers +1;
      setCorrect(corrects);
    } else {
      alert("Wrong!");
      const wrongs = wrong_answers +1;
      setWrong(wrongs);
    }

    randomizeNum();
    setAnswer('');
  }

  function randomizeNum() {
    setNumber1(Math.floor(Math.random() * 10) + 1);
    setNumber2(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <div style={{padding: 30}}>
      <h3>Addition calculations</h3>
      <form onSubmit={check}>
        <div>
          <output>{number1}</output>
          <label>+</label>
          <output>{number2}</output>
          <label>=</label>
          <input type="number" step="1" value={answer} onChange={e => setAnswer(e.target.value)}/>
        </div>
        <div style={{marginTop:20}}>
          <button>Check</button>
        </div>
        <div>
          <output>{correct_answers}</output>
        </div>
        <div>
          <output>{wrong_answers}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
