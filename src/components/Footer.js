import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import linkedIn from "../assets/img/linkedIn.svg";
import github from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mohamed-rami-jebali-185089249/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="Icon" />
              </a>
              <a
                href="https://github.com/jebalirami7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
