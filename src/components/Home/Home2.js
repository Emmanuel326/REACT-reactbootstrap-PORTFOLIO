import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple">AM I?</span>
            </h1>
            <p className="home-about-body">
              I like building things that are fast, efficient, and reliable.  
              Whether it's low-level systems or backend services, I enjoy making
              code do the heavy lifting. ⚡
              <br />
              <br />
              My favorite tools of the trade are
              <i>
                <b className="purple"> C, Go, and SQL</b>
              </i>
              — languages and tech that give me both power and control.
              <br />
              <br />
              I spend my time exploring
              <i>
                <b className="purple"> systems programming</b>,
              </i>{" "}
              digging into{" "}
              <i>
                <b className="purple">databases</b>
              </i>{" "}
              and figuring out how to make them scale, and experimenting with
              <i>
                <b className="purple"> Python</b>
              </i>{" "}
              for analysis and quick scripting.
              <br />
              <br />
              I keep my workflow sharp with{" "}
              <i>
                <b className="purple">Linux, Git, and Docker</b>
              </i>{" "}
              — and I'm always tinkering with new ideas just to see how far I
              can push them.
              <br />
              <br />
              In short: I like to **build, break, and rebuild** until it feels
              right.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Emmanuel326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://X.com/Emmanu3l326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Emmanu3l326/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.reddit.com/u/WittyBad6073/s/wCDuFrHts7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillRedditCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/31349080/emmanu3l326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;