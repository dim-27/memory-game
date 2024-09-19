import "../Styles/Card.css"

export default function Card({films,handleCurrentScore, onClickCard}) { 
  
  return (
    <>
    {films.length > 0 ? (
      <button>
        <div className="Card">
          {films.map((film) => (
              <div className="Card-List" key={film.id} onClick={() => onClickCard(film.id)}
              >
                <div className="Card-Image">
                  <img src={film.image} />
                </div>
                <div className="Card-Description">
                  <p>{film.title}</p>
                </div>
              </div>
            ))}
        </div>
      </button>
    ) : (
      <div className="loading">Loading...</div>
    )}
    </>
  )
}