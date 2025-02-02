import'../styles/MoviePoster.css';


function MoviePoster () {

return(

<div className='top-image'>
        <img className="special-image" src="./public/movieposter.jpg"/>

  <div className='overlaytext'>
    <h1>Your Movie Collection</h1>
    <p>Explore the best movies available</p>
    <button>Check them out below</button>
  </div>
  </div>
)
  }

  export default MoviePoster