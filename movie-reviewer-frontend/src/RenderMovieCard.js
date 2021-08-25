import { useEffect, useState, useHistory } from "react";
import { Card, Popup, Image, Button } from "semantic-ui-react";

export default function RenderMovieCard({title, imdbId, posterImg, year, plot}){

    // let history = useHistory()
    
    // function handleClick(){
    //     history.push()
    // }
    
    return(
        <Popup trigger = {
            <Card>
                <Image src={posterImg} wrapped ui={false}/>
                <Card.Header>{`${title} (${year})`}</Card.Header>
                <Card.Description className = 'plotDescriptions'>
                    {plot}
                </Card.Description>
                
                    <div>
                        <Button fluid animated='fade'>
                            <Button.Content visible>Reviews</Button.Content>
                            <Button.Content hidden>Click to See or Add Reviews</Button.Content>
                        </Button>
                    </div>
                
            </Card>
        }>
        </Popup>
    )
}