import "../Styles/Card.css"

export default function Card({films}) {
  return (
    <>
    <button>
        {films.map((film) => (
            <div className="Card" key={film.id}>
              <div className="Card-Image">
                <img src={film.image} alt="Howl and Sophie Young" />
              </div>
              <div className="Card-Description">
                <p>Howl & Sophie</p>
              </div>
            </div>
          ))}
    </button>
    </>
  )
}