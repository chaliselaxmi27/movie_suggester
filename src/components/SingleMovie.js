import React from 'react'
import { Button, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const SingleMovie = (props) => {
  return (
    <>
      <Col key={props.data.id}>
        <Card style={{ width: "16rem", minHeight: "730px" }}>
          <Card.Img
            variant="top"
            src={props.data.image}
            style={{ maxWidth: "250px" }}/>
             <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>{props.data.info}</Card.Text>
            <Link to={`/viewmovie/${props.data.id}`}>
              <Button variant="dark">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      </>  
  );
};

export default SingleMovie
 