import React from "react";
import { Button } from "react-bootstrap";
import { SlMagnifier } from "react-icons/sl";
import "../../Styling/Homepage.scss"

export default function JoinMessage() {
  const name = "Odeya";
  return (
    <div className="p-3 m-3">
        <h3>Welcome, {name}</h3>
        <h6>Are you ready to solve a murder?</h6>
        <h6 className="pb-3">
          Last night, a mysterious murder took place in ITC. The police were unable to find the killer, but it's up to you to piece together the clues and evidence left behind to solve the case.<br></br>

          Can you use your detective skills to solve the mystery and bring the killer to justice, or will the truth remain forever shrouded in darkness? <br></br>The outcome of the game is in your hands.
          </h6>
          <Button className="new-btn"><SlMagnifier/>   Uncover the Truth</Button>
    </div>
  );
}
