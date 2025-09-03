import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNeovim,
  SiLinux,
  SiWindows,
  SiMacos,
  SiTmux,
  SiGnubash,
  SiDocker,
  SiLinkedin,
  SiGo,
  SiPython,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>

      {/* Editors */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim />
      </Col>

      {/* Terminal Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTmux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>

      {/* Language Toolchains */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinkedin /> {/* C compiler */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo /> {/* Go toolchain */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython /> {/* Python environment */}
      </Col>

      {/* Extra Dev Tool */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
