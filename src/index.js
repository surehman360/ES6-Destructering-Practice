//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(honda);
const {
  model,
  coloursByPopularity: teslaColor,
  speedStats: teslaSpeed,
} = tesla;
const { topSpeed: teslaTopSpeed } = teslaSpeed;
const [teslaTopColour] = teslaColor;

const {
  model: hondaModel,
  coloursByPopularity: hondaColor,
  speedStats: hondaSpeed,
} = honda;

const { topSpeed: hondaTopSpeed } = hondaSpeed;
const [hondaTopColour] = hondaColor;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
