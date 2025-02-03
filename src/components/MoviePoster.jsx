import'../styles/MoviePoster.css';


function MoviePoster () {

return(

<div className='top-image'>
<img className="special-image" 
src="https://images.alphacoders.com/128/thumb-1920-1286361.jpg"
 alt="Movie Poster" />


  <div className='overlaytext'>
    <h1>Your Movie Collection</h1>
    <p>Explore the best movies available</p>
    <button>Check them out below</button>
  </div>
  </div>
)
  }

  export default MoviePoster