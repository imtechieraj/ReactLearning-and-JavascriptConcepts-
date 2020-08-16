import React from "react";

import { Card, Button } from "react-bootstrap";

const Cards = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item, i) => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.url} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                     </Card.Text>
                            <Button variant="primary" >Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Cards;