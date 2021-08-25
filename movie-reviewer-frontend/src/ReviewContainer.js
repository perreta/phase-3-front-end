import Review from "./Review"

function ReviewContainer({ reviews }) {

   
    const review = reviews.map(review => {
        //HOW TO HANDLE THESE SNAKE CASE VARIABLES PROF_PIC, FAV_MOVIE, DATE_JOINED
        return <Review key={review.id} movieTitle={review.movie_title} moviePoster={review.movie_poster} rating={review.rating} content={review.review_text}/>
    })

    return (
        <div className="reviewcontainer">
            {review}
        </div>
    )
}
export default ReviewContainer