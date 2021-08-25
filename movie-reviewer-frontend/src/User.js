import ReviewContainer from "./ReviewContainer";
import { useState } from "react";


function User({ name, favMovie, profPic, dateJoined, reviews}) {

  const [ isClicked, setIsClicked ] = useState(false)
  
  function handleClick(){
    setIsClicked(!isClicked)
  }
  return(
    <div className="container" onClick={handleClick}>
      <div className="profpic">
        <img src={profPic} alt="Profile" style={{ maxWidth: "400px", width:"100%" }}/>
      </div>
      <div className="userInfo">
        <h1>User: {name}</h1>
        <p className={ !isClicked ? "favoritemovie" : "hidden" }>Favorite Movie: {favMovie}</p>
        <p className={ !isClicked ? "datejoined" : "hidden" }>Date Joined: {dateJoined}</p>
      </div>
      <div className={ isClicked ? "reviews" : "hidden"}>
        <ReviewContainer reviews={reviews}/>
      </div>
    </div>
  )
}

export default User;