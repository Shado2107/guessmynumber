import React, { useState } from 'react';

const App = () => {

  const [guess, setGuess] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [answer, setAnswer] = useState(0)
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [highScores, setHighScores] = useState([]);

  const handleInputChange = (event) => {
    setGuess(parseInt(event.target.value));
  };

  const handleNameInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (guess === secretNumber) {
      const newScore = {
        name: playerName,
        score: score + 10
      };
      setHighScores([...highScores, newScore]);
      setMessage(`Congratulations! You guessed the number ${secretNumber}!`);
      // setScore(score + 10);
      setScore(0);
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
            {/* <input className="guess" type="number" value={guess} onChange={handleInputChange} /> */}
            <label htmlFor="guess">Guess:</label>
            <input type="number" id="guess" name="guess" value={guess} onChange={handleInputChange} />
            <label htmlFor="player-name">Name:</label>
            <input type="text" id="player-name" name="player-name" value={playerName} onChange={handleNameInputChange} />
            {/* <button type="submit">Submit</button> */}
            <button  className="btn check" >Submit Guess</button>
          </form>
        </section>
        <section className='right'>
        <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score"> {score} </span>
          </p>
          <h2 className="label-highscore">🥇 Highscore: </h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highScores.sort((a, b) => b.score - a.score).map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default App;