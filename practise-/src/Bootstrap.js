import React from 'react'
import { Button, Card  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
    return (
        <>
            <Button>click</Button>
            <Button variant="danger">danger</Button>

            <Button variant="info">info</Button>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default Bootstrap