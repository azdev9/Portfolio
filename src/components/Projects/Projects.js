import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import islam from "../../Assets/Projects/islam.jpeg";
import fruits from "../../Assets/Projects/fruits.png";

import stock from "../../Assets/Projects/stock.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Management System"
              description="A full-stack stock management system built with Java, Spring Boot, and Angular. Features include real-time inventory tracking, CRUD operations for products, categories, and suppliers, role-based access for admins and workers, and dynamic reporting for stock transactions."
              ghLink="https://github.com/azdev9/stock-management"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={islam}
              isBlog={false}
              title="Islamic Quiz App"
              description="An interactive Islamic quiz application built with React.js. Features include multiple-choice questions on Quran, Hadith, and Islamic history, real-time score tracking, a responsive user interface, timer-based challenges, and dynamic rendering of questions using React state and hooks."
              ghLink="https://github.com/azdev9/islamic-quiz"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruits}
              isBlog={false}
              title="Smart Fruit & Vegetable Detector (YOLOv8)"
              description="Real-time fruit and vegetable detection system built with Python, YOLOv8, and OpenCV. Detects and classifies fruits and vegetables from live camera feed with bounding boxes and FPS counter. Supports customizable class filtering, GPU acceleration with PyTorch, and adjustable confidence thresholds for accurate and efficient recognition."
              ghLink="https://github.com/azdev9/FruitsPrediction"
              demoLink="#"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
