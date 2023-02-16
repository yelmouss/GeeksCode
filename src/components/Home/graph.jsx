import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";



ChartJS.register(ArcElement, Tooltip, Legend);

function Graph() {

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
  );
}

export default Graph;
