import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home({ dark, updateDark }) {
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        <Col >1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>4 of 3</Col>
      </Row>
    </Container>
  );
}

export default Home;
