import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import { Card, Popup, Image, Button, Rating, Icon } from "semantic-ui-react";

export default function RenderMovieCard({title, imdbId, posterImg, year, plot, rating}){

    let history = useHistory()
    
    function handleClick(){
        history.push(`/search/${imdbId}`)
    }
    
    return(
        <Popup trigger = {
            <Card>
                <Image src={posterImg} wrapped ui={false}/>
                <Card.Header>{`${title} (${year})`}</Card.Header>
                <Card.Description className = 'plotDescriptions'>
                    {plot}
                </Card.Description>
                
                    
                    <Button fluid onClick={handleClick}>
                        Click to Create Review
                    </Button>
                    
                
            </Card>
        }>
        <Popup.Header>Movie Rating {rating}/10</Popup.Header>
        <Popup.Content>
            <Rating icon='star' defaultRating={rating} maxRating={10} />
        </Popup.Content>
        </Popup>
    )
}