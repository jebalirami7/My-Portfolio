import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/img/logo.png";
import linkedIn from "../assets/img/linkedIn.svg";
import github from "../assets/img/github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <HashLink
          to="/#home"
          scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
          className="navbar-brand"
          onClick={() => onUpdateActiveLink("home")}
        >
          <img src={logo} alt="Logo" />
        </HashLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <HashLink
              to="/#home"
              scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
              className={activeLink === "home" ? "active navbar-link nav-link" : "navbar-link nav-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </HashLink>
            <HashLink
              to="/#skills"
              scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
              className={activeLink === "skills" ? "active navbar-link nav-link" : "navbar-link nav-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </HashLink>
            <HashLink
              to="/#projects"
              scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
              className={activeLink === "projects" ? "active navbar-link nav-link" : "navbar-link nav-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </HashLink>
          </Nav>
          <span className="navbar-text">
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
            {/* <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
