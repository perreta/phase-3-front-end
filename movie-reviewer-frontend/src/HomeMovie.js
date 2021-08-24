import React, {useState} from "react";

function Movie({name}) {

  return (
      <div className="Movierenders">
        <h1>
            {name}
        </h1>
    </div>
  );
}

export default Movie;