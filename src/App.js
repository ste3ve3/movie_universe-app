import { useEffect, useState } from "react";

import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"

const API_URL = "https://www.omdbapi.com?apikey=ee7e3479";

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        searchMovies("avengers")
    }, [])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search)
        console.log(data)
      };

    return (
        <div className="app">
      <h1>MovieUniverse</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(event) => {setSearchTerm(event.target.value)}}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>

      <div className="container">
        {
        movies?.length > 0  ? (
        movies.map((eachMovie) => (
            <MovieCard movie={eachMovie}/>
        ) )
        ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
        )
        }
        
        
      </div>

    </div>
    )
}

export default App;