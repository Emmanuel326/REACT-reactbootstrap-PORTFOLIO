import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

function ResumeNew() {
  const resumeFile = process.env.PUBLIC_URL + "/Emmanuel_sso.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Header */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1 className="resume-title">My Resume</h1>
            <p className="resume-subtitle">
              Click below to view or download my resume
            </p>
          </Col>
        </Row>

        {/* Download Button */}
        <Row className="justify-content-center mb-4">
          <Col md="auto" className="text-center">
            <Button
              variant="primary"
              className="download-btn"
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineDownload />
              &nbsp;View / Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
