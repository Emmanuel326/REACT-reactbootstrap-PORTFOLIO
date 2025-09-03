import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">DONE</strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
