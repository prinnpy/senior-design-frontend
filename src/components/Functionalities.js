import React from 'react'
import { Form, Card } from "react-bootstrap";

export default function Functionalities() {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Generate Code</Card.Title>
                    <Card.Text>
                        We can auto generate code for this endpoint. Simply follow the editor below.
                        If you select none, the API endpoint will just be a stub.
                    </Card.Text>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Functionality:</Form.Label>
                        <Form.Control as="select">
                            <option>None</option>
                            <option>Firestore - Get A Document</option>
                            <option>Firestore - Update A Document</option>
                            <option>Firestore - Delete A Document</option>
                            <option>Firestore - Get A Collection</option>
                            <option>Firestore - Query A Collection</option>
                        </Form.Control>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Document Path:</Form.Label>
                        <Form.Control as="select">
                            <option>Static Path</option>
                            <option>Dynamic Path</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Label>Path:</Form.Label>
                    <Form.Control as="text"></Form.Control>

                    <Form.Group controlId="exampleForm.ControlSelect3">
                        <Form.Label>Collection Query:</Form.Label>
                        <Form.Control as="select">
                            <option>Static Query</option>
                            <option>Dynamic Query</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Label>Query:</Form.Label>
                    <Form.Control as="text"></Form.Control>

                </Card.Body>
            </Card>

        </div>
    )
}
