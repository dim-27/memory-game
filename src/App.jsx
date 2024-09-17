import './Styles/App.css'
import GameScore from './Components/GameScore'
import Card from './Components/Card'
import { useState, useEffect } from 'react';

function App() {
  const [APIdata, setAPIdata] = useState(null);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAPIdata(data)     
        console.log(data);
           
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='App'>
        <div className="Game-Header">
          <GameScore/>
        </div>
        <div className="Game-Body">
          {APIdata && <Card films={APIdata}/>}
        </div>
      </div>
    </>
  )
}

export default App
