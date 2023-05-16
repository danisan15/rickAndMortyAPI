import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

const CharacterCard = ({ fetchResult = [] }) => {
  console.log(fetchResult);
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          {fetchResult.map((e) => {
            return (
              <Card style={{ width: "18rem" }} key={e.id} className="card">
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Status: {e.status} <br /> Species: {e.species}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CharacterCard;
