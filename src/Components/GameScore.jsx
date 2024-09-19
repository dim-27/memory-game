import "../Styles/GameScore.css"

export default function GameScore({currentScore, highScore}) {
  return (
      <header className="GameScore">
      <div className="Game-Title">
        <h1 className="Title App-Name">Ghibli Memory Game</h1>
      </div>
       <div className="Scores">
        <div className="CurrentScore">
          <h3 className="Title Current">Current Score</h3>
          <p className="Score">{currentScore}</p>
        </div>
        <div className="BestScore">
          <h3 className="Title Best">Best Score</h3>
          <p className="Score">{highScore}</p>
        </div>
       </div>
      </header>
  );
}