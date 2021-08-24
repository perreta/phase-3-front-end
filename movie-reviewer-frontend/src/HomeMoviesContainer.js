
import React, {useState} from "react";
import { useEffect } from "react";
import HomeMovie from "./HomeMovie";

function HomeMoviesContainer() {
    const [homeMovies, setHomeMovies] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:9292/")
        .then((r) => r.json())
        .then((homeMovies) => setHomeMovies(homeMovies));
    }, []);
  
    return (
      <section>
        {homeMovies.map((movie) => (
          <HomeMovie key={movie.imdb_id} name={movie.name}/>
        ))}
      </section>
    );
  }

export default HomeMoviesContainer