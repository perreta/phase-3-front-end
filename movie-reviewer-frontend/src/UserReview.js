function UserReview({ title, poster, rating, content }) {

  return(
    <div className="container" >
      <div className="poster">
        <img src={poster} alt="Poster" style={{ maxWidth: "200px", width:"100%" }}/>
      </div>
      <div className="review">
        <h1>{title}</h1>
        <h3>Rating: {rating}/10</h3>
        <p>Review: {content}</p>
      </div>
    </div>
  )
}
  
export default UserReview;
