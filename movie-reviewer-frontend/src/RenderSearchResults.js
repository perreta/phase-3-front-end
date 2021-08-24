import { useEffect, useState } from "react";
import RenderMovieCard from "./RenderMovieCard";
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'semantic-ui-react' 

export default function RenderSearchResults({searchObject}){
    const apiKey = "799cdd3c";
    const [movieSearch, setMoviesSearch] = useState([])
    let movieCards = [];

    useEffect(()=>{
        if(searchObject.searchTerm != undefined){
            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchObject.searchTerm}&page=1`)
            .then(res => res.json())
            .then(data => {
                setMoviesSearch(data.Search)
            })
        }
        
    }, [searchObject]);

    if(movieSearch.length != 0){
        movieCards = movieSearch.map(movie => {
            return <RenderMovieCard key={uuidv4()} title={movie.Title} imdbId={movie.imdbID} posterImg = {movie.Poster} year = {movie.Year}/>
        })
        console.log(movieCards)
    }

    

    return(
        <Card.Group className='cardGroupSearch'>
            {movieCards}
        </Card.Group>
    )
}