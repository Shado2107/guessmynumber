import React, { useState } from 'react';

const App = () => {

  const [guess, setGuess] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [answer, setAnswer] = useState(0)
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [score, setScore] = useState(0);

  const handleInputChange = (event) => {
    setGuess(parseInt(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (guess === secretNumber) {
      setMessage(`Congratulations! You guessed the number ${secretNumber}!`);
      setScore(score + 10);
      setAnswer(secretNumber);
      // setSecretNumber(Math.floor(Math.random() * 100) + 1);
    } else if (guess < secretNumber) {
      setMessage(`The number is higher than ${guess}. Try again!`);
      setScore(score - 1);
    } else {
      setMessage(`The number is lower than ${guess}. Try again!`);
      setScore(score - 1);
    }
    setGuess('');
  };

  const handleRestart = () => {
    setAnswer(0)
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setMessage("Guess a number between 1 and 100")
  }

  return (
    <>
      <header>
        <h1>Guess My Number</h1>
        <p class="between">Guess a number between 1 and 100</p>
        <button className="btn again" onClick={handleRestart}>Again!</button>
        <div class="number"> {answer} </div>

      </header>
      <main>
        <section className='left'>
          <form onSubmit={handleFormSubmit}>
            <input className="guess" type="number" value={guess} onChange={handleInputChange} />
            <button  className="btn check" >Submit Guess</button>
          </form>
        </section>
        <section className='right'>
        <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore"> {score} </span>
          </p>
        </section>
      </main>
    </>
  );
};

export default App;