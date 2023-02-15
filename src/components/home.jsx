import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaUserGraduate, FaUserEdit, FaUsers } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import {TbClipboardCheck}from "react-icons/tb";
import {GiBodySwapping} from "react-icons/gi"
ChartJS.register(ArcElement, Tooltip, Legend);

function Home({ dark, updateDark }) {
  const data = {
    labels: ["Detractors", "Promoters"],
    datasets: [
      {
        label: "# of Votes",
        data: [80, 20],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "80%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Container className="flex-shrink-0">
      <Row xs={1} md={2} lg={4} className="mt-3">
        <Col lg={9}>
          <Row xs={1} md={3} lg={3}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    13 <FaUserEdit />
                  </Card.Title>
                  <Card.Text>Active Students</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    3 <FaUserGraduate />
                  </Card.Title>
                  <Card.Text>Graduated Students</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    3 <FaUsers />
                  </Card.Title>
                  <Card.Text>Active Guilds</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} lg={3} className="d-flex align-items-stretch">
            <Col>
              <Card className="mt-2" style={{ height: "10rem" }}>
                <Card.Body>
                  <Card.Title>0 <TbClipboardCheck /></Card.Title>
                  <Card.Text>Pending Checkpoints</Card.Text>
                  <Card.Link href="#">View </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mt-2 " style={{ height: "10rem" }}>
                <Card.Body>
                  <Row>
                  <Card.Title><GiBodySwapping /></Card.Title>
                  
                    <Col>
                      {" "}
                      <Card.Title>3</Card.Title>
                      <Card.Text>Online 1-1</Card.Text>
                    </Col>
                    <Col>
                      {" "}
                      <Card.Title>3</Card.Title>
                      <Card.Text>Face To Face 1-1</Card.Text>
                    </Col>
                    <Card.Link href="#">one-to-one-interviews </Card.Link>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="h-50">
              <Card className="mt-2" style={{ height: "10rem" }}>
                <Card.Body>
                  <Card.Title>1 <GrWorkshop /></Card.Title>
                  <Card.Text>Scheduled Workshops</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Students’ feedback</Card.Title>
              <Card.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Last 30 Days
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">Overall</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Text>
              <Doughnut data={data} plugins={plugins} height={1} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
