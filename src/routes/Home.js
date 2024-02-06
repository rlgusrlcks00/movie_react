import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      setLoading(true);
      const json = await (await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, [])
    return (
      <div>
        <h1>The movies! {loading ? "" : `(${movies.length})`}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                medium_cover_image = {movie.medium_cover_image} alt={movie.title}
                title = {movie.title}
                rating = {movie.rating}
                runtime= {movie.rating}
                summary={movie.summary}
                genres={movie.genres} />
            ))}
          </ul>
        )}
      </div>
    );
}
export default Home;
