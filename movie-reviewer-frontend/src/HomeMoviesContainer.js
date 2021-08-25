import React, {useState} from "react";
import { useEffect } from "react";
import HomeMovie from "./HomeMovie";
import Carousel from 'react-bootstrap/Carousel'
import ItemsCarousel from 'react-items-carousel';

function HomeMoviesContainer() {
    const [homeMovies, setHomeMovies] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:9292/")
        .then((r) => r.json())
        .then((homeMovies) => setHomeMovies(homeMovies));
    }, []);

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
          {homeMovies.map((movie) => (
            <img
                style ={{height: 400, width: 290}}
              src={movie.img_url}
              alt="Poster not found"
            />
          ))}
      </ItemsCarousel>
    </div>
  );

    //   return (
    //     <Carousel >
    //       {homeMovies.map((movie) => (
    //         <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src={movie.img_url}
    //           alt="First slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>{movie.name}</h3>
    //           <p>{movie.plot}</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       ))}
    //     </Carousel>
    //   );
  
    // return (
    //   <section>
    //     {homeMovies.map((movie) => (
    //       <HomeMovie key={movie.imdb_id} name={movie.name} img_url={movie.img_url}/>
    //     ))}
    //   </section>
    // );
  }

export default HomeMoviesContainer