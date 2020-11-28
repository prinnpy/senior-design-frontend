import React from 'react';
import Card from 'react-bootstrap/Card';

const Request = (props) => {

    const { path, request, requestSummary } = props;

    return (
        <Card style={{ marginBottom: "20px", border: "none" }}>
            { request === "post" && 
                <div>
                    <Card.Header as="h5" style={{backgroundColor: "#49CC90", color: "#fff", border: "none", }}>{request} </Card.Header>
                    <Card.Body style={{backgroundColor: "#E8F6F0", border: "1px solid #49CC90", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <Card.Title>{path}</Card.Title>
                        <Card.Text>
                            {requestSummary}
                        </Card.Text>
                    </Card.Body>
                </div>
            }
            { request === "put" && 
                <div>
                    <Card.Header as="h5" style={{backgroundColor: "#FCA130", color: "#fff", border: "none", }}>{request} </Card.Header>
                    <Card.Body style={{backgroundColor: "#FBF1E6", border: "1px solid #FCA130", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <Card.Title>{path}</Card.Title>
                        <Card.Text>
                            {requestSummary}
                        </Card.Text>
                    </Card.Body>
                </div>
            }
            { request === "get" && 
                <div>
                    <Card.Header as="h5" style={{backgroundColor: "#61AFFE", color: "#fff", border: "none", }}>{request} </Card.Header>
                    <Card.Body style={{backgroundColor: "#EBF3FB", border: "1px solid #61AFFE", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <Card.Title>{path}</Card.Title>
                        <Card.Text>
                            {requestSummary}
                        </Card.Text>
                    </Card.Body>
                </div>
            }
            { request === "delete" && 
                <div>
                    <Card.Header as="h5" style={{backgroundColor: "#F93E3E", color: "#fff", border: "none", }}>{request} </Card.Header>
                    <Card.Body style={{backgroundColor: "#FAE7E7", border: "1px solid #F93E3E", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <Card.Title>{path}</Card.Title>
                        <Card.Text>
                            {requestSummary}
                        </Card.Text>
                    </Card.Body>
                </div>
            }
        </Card>
    )
}

export default Request;