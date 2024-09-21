import './Styles/App.css'
import GameScore from './Components/GameScore'
import Card from './Components/Card'
import { useState, useEffect } from 'react';

function App() {
  const [APIdata, setAPIdata] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCard, setClickedCard] = useState({})
  const [loading, setLoading] = useState(false);
  const handleCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  }
  const handleCardClick = (id) => {
    if(clickedCard[id]) {
      setCurrentScore(0);
      setClickedCard({})
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCard({...clickedCard, [id]: true});
    }
  }

  if(currentScore > highScore) {
    setHighScore(currentScore);
  }

  const resetAPI = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }

  const getAPIGhibli = () => {
      fetch(`https://ghibliapi.vercel.app/films`)
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then(data => {
          const allFilms = [];
          while(allFilms.length < 5) {
            const getRandomFilm = data[Math.floor(Math.random() * data.length)];
            if(!allFilms.includes(getRandomFilm)) {
              allFilms.push(getRandomFilm)
            }
          }
          setAPIdata(allFilms)                
        }).catch(err => {
          console.log(err.message);
        })
    }

  useEffect(() => {
    getAPIGhibli();
    resetAPI()
  }, [clickedCard, currentScore])


  return (
    <>
      <div className='App'>
        <div className="Game-Header">
          <GameScore currentScore={currentScore} highScore={highScore}/>
        </div>
        <div className="Game-Body">
          {loading? (<div className='loading'>Loading...</div>)  : (APIdata && <Card films={APIdata} handleCurrentScore={handleCurrentScore} onClickCard={handleCardClick}/>)}
        </div>
      </div>
    </>
  )
}

export default App
