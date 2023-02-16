import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Graph from "./graph";
import Work from "./work";

function Home({ dark, updateDark }) {
  return (
    <Container className="flex-shrink-0">
      <Row xs={1} md={2} lg={4} className="mt-3">
        <Col lg={9}>
          <Work />
        </Col>
        <Col>
          <Graph />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
