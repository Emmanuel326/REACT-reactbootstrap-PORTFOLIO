import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiDjango,
  DiReact,
  DiGit,
  DiDocker,
  DiLinux,
} from "react-icons/di";
import {
  SiFastapi,
  SiNumpy,
  SiPandas,
  Si1Password,
  SiPostman,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Django */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>

      {/* FastAPI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>

      {/* Data Science / Analysis Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Si1Password />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* C */}
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>

      {/* Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
