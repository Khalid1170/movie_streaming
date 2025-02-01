**#MOVIE BUZZ**

This is a react based web application that fetches and displays movies from the movie data base (TMDB) API. the app showcases trending, popular and free to watch movies in separate categories. users can view movie details and add movies to their watchlist.

**##Features**

**Trending movies:** displays movies that are currently trending

**Popular movies:** shows the most popular movies

**Free movies:** lists movies that are free to watch

**Movie cards:** each movie is displayed in a card formart with a poster, title and an add to watch list button

**Watch list:** Users can add movies to their watchlist


**##Tech used**

**React:** A JS library for building user interfaces

**TMDB API:** The movie database API for fetching movie data

**CSS:** Custom styles for the movie cards and display layout


**##Code structure**

**Movie component.js:** Contains functions to fetch movies from the TMDB API

✅ fetchMovies Category: fetches movies based on the category

✅ fetchTrendingMovies: fetches trending movies

✅ fetchFreeMovies: fetches free to watch movies

**MovieCard.js:** A react component that displays individual movie details.

✅ Display the movie poster, title and an add to watchlist button

✅ Logs the movie title to the console when the button is clicked.


**MovieDisplay.js:** The main component that fetches and dispalys movies in different categories

✅ Uses useEffect to fetch movies when the component mounts
✅ Renders movie card components for each movie in the trending, popular and free categories

**Styles:** Contains the css styles for styling the components


**##Usage**


✅ The web app automatically fetches and displays movies in three categories ie Trending, popular and free to watch

✅ Click the add to watch list button on any movie card to add it to your watch list