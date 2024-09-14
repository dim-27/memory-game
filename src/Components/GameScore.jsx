import "../Styles/GameScore.css"

export default function GameScore() {
  return (
      <header className="GameScore">
       <div className="Scores">
        <div className="CurrentScore">
          <h3 className="Title Current">Current Score</h3>
          <p className="Score">0</p>
        </div>
        <div className="Game-Title">
          <h1 className="Title App-Name">Ghibli Memory Game</h1>
        </div>
        <div className="BestScore">
          <h3 className="Title Best">Best Score</h3>
          <p className="Score">0</p>
        </div>
       </div>
      </header>
  );
}