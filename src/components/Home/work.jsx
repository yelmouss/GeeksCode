import React from 'react'
import Card from "react-bootstrap/Card";


import { FaUserGraduate, FaUserEdit, FaUsers } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { TbClipboardCheck } from "react-icons/tb";
import { GiBodySwapping } from "react-icons/gi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Work  ()  {
  return (
    <><Row
          xs={2}
          md={3}
          lg={3}
          className="p-2 d-flex justify-content-center"
      >
          <Col className="p-2">
              <Card>
                  <Card.Body>
                      <Card.Title>
                          13 <FaUserEdit />
                      </Card.Title>
                      <Card.Text>Active Students</Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col className="p-2">
              <Card>
                  <Card.Body>
                      <Card.Title>
                          3 <FaUserGraduate />
                      </Card.Title>
                      <Card.Text>Graduated Students</Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col className="p-2">
              <Card>
                  <Card.Body>
                      <Card.Title>
                          3 <FaUsers />
                      </Card.Title>
                      <Card.Text>Active Guilds</Card.Text>
                  </Card.Body>
              </Card>
          </Col>
      </Row><Row xs={1} md={3} lg={3} className="d-flex align-items-stretch">
              <Col>
                  <Card className="mt-2" style={{ height: "10rem" }}>
                      <Card.Body>
                          <Card.Title>
                              0 <TbClipboardCheck />
                          </Card.Title>
                          <Card.Text>Pending Checkpoints</Card.Text>
                          <Card.Link href="#">View </Card.Link>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card className="mt-2 " style={{ height: "10rem" }}>
                      <Card.Body>
                          <Row>
                              <Card.Title>
                                  <GiBodySwapping />
                              </Card.Title>
                              <Col>
                                  <Card>
                                      <Card.Title>3</Card.Title>
                                      <Card.Text>Online 1-1</Card.Text>
                                  </Card>
                              </Col>
                              <Col>
                                  <Card>
                                      <Card.Title>3</Card.Title>
                                      <Card.Text>Face To Face 1-1</Card.Text>
                                  </Card>
                              </Col>
                              <Card.Link href="#">one-to-one-interviews </Card.Link>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className="h-50">
                  <Card className="mt-2" style={{ height: "10rem" }}>
                      <Card.Body>
                          <Card.Title>
                              1 <GrWorkshop />
                          </Card.Title>
                          <Card.Text>Scheduled Workshops</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row></>
  )
}

export default Work