import './Styles/App.css'
import GameScore from './Components/GameScore'
import Card from './Components/Card'

function App() {
  return (
    <>
      <div className='App'>
        <div className="Game-Header">
          <GameScore/>
        </div>
        <div className="Game-Body">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default App
