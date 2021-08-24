import { useEffect, useState } from "react";
import { Card, Popup, Image } from "semantic-ui-react";

export default function RenderMovieCard({title, imdbId, posterImg, year}){
    return(
        <Popup trigger = {
            <Card>
                <Image src={posterImg} wrapped ui={false}/>
                <Card.Header>{`${title} (${year})`}</Card.Header>
            </Card>
        }>
        </Popup>
    )
}