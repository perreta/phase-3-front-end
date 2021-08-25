function Review({ movieTitle, moviePoster, rating, content }) {
  
  
  
    return(
      <div className="container" >
        <div className="poster">
          <img src={moviePoster} alt="Poster" style={{ maxWidth: "400px", width:"100%" }}/>
        </div>
        <div className="userInfo">
          <h1>Title: {movieTitle}</h1>
          <p>Rating: {rating}/5</p>
          <p>Review: {content}</p>
        </div>
      </div>
    )
  }
  
  export default Review;