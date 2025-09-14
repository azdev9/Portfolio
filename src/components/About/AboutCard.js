import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdelaziz Mardhi</span>
            from <span className="purple">Oujda, Morocco</span>.
            <br />
            I am currently a 4th year Software Engineering student at <span className="purple">École Supérieure de Management d'Informatique & de Télécommunication</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build innovative solutions that impact lives!"{" "}
          </p>
          <footer className="blockquote-footer">Abdelaziz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;