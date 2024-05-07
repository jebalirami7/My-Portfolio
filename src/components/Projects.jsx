import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import donkeyKong from "../assets/img/projects/Donkey Kong/Classic-Donkey-Kong-Demo-Picture.png";
import donkey1 from "../assets/img/projects/Donkey Kong/donkey1.png";
import donkey2 from "../assets/img/projects/Donkey Kong/donkey2.png";
import donkey3 from "../assets/img/projects/Donkey Kong/donkey3.png";
import donkey4 from "../assets/img/projects/Donkey Kong/donkey4.png";
import mesaVerde from "../assets/img/projects/Mesa Verde/acceuil-messa-verde.png"
import mesa1 from "../assets/img/projects/Mesa Verde/mesa1.png"
import mesa2 from "../assets/img/projects/Mesa Verde/mesa2.png"
import mesa3 from "../assets/img/projects/Mesa Verde/mesa3.png"
import mesa4 from "../assets/img/projects/Mesa Verde/mesa4.png"
import cpc from '../assets/img/projects/CPC/cpc.png'
import cpc1 from '../assets/img/projects/CPC/cpc1.png'
import cpc2 from '../assets/img/projects/CPC/cpc2.png'
import cpc3 from '../assets/img/projects/CPC/cpc3.png'
import cpc4 from '../assets/img/projects/CPC/cpc4.png'
import cpc5 from '../assets/img/projects/CPC/cpc5.png'
import cpc6 from '../assets/img/projects/CPC/cpc6.png'
import cpc7 from '../assets/img/projects/CPC/cpc7.png'
import cpc8 from '../assets/img/projects/CPC/cpc8.png'
import cpc9 from '../assets/img/projects/CPC/cpc9.png'

export const projects = [
  {
    id: 1, 
    type: "web",
    title: "CPC Enicarthage",
    description: `This platform is crafted as a problem-solving hub, enabling
      users to tackle challenges and engage in competitions to earn
      points. It's built with a modern tech stack: ReactJS, ExpressJS
      and PostgreSQL. To enhance scalability and integration, Docker
      is used to seamlessly attach an external judging API, while Redis
      provides streamlines session logins.`,
    images: [
      cpc, cpc1, cpc2, cpc3, cpc4, cpc5, cpc6, cpc7, cpc8, cpc9
    ],
    date: "Since June 2023",
    links: {
      repo: "https://github.com/YassineBenAbdelaziz/CPC-Platform",
    }
  },
  {
    id: 2,
    type: "desktop",
    title: "Classic Donkey Kong",
    description: `Classic Donkey Kong arcade game, built using Java and JavaFX for graphics.
      In this game, players control Mario as they navigate through a series of increasingly challenging levels to rescue Princess Peach from the clutches of Donkey Kong. 
      Dodge barrels, climb ladders, and leap over obstacles to reach the top of each level and confront Donkey Kong himself.`,
    images: [
      donkeyKong, donkey1, donkey2, donkey3, donkey4
    ],
    video: "https://github.com/jebalirami7/Classic-Donkey-Kong/assets/138411253/5923a2a7-d9f9-44f3-b6c2-c3cdb9e75b31",
    date: "October 2023 - December 2023",
    links: {
      repo: "https://github.com/jebalirami7/Classic-Donkey-Kong",
    }
  },
  {
    id: 3,
    type: "web",
    title: "Mesa Verde Bank",
    description: "The Bank Customer Complaint Management System is a web-based application developed using the MEAN stack to facilitate the efficient handling of complaints from individual retail customers of a bank. The system aims to streamline the complaint resolution process, enhance communication between customers and bank representatives, and ultimately improve customer satisfaction.",
    images: [
      mesaVerde, mesa1, mesa3, mesa2, mesa4
    ],
    video: "https://github.com/jebalirami7/mesa-verde-bank/assets/138411253/a5f08b26-c3e7-4254-b9a1-5207f44d318d",
    date: "October 2023 - December 2023",
    links: {
      repo: "https://github.com/jebalirami7/mesa-verde-bank",
      demo: "https://webproject-pied.vercel.app/"
    }
  },
];

export const Projects = () => {

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{marginBottom: "50px"}}>Projects</h2>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project} />
                      )
                    })
                  }
                </Row>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Desktop Applications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if (project.type === "web")
                              return (
                                <ProjectCard key={index} {...project} />
                              )
                            else  
                              return <div key={index}></div>
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if (project.type === "mobile")
                              return (
                                <ProjectCard key={index} {...project} />
                              )
                            else  
                              return <div key={index}></div>
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if (project.type === "desktop")
                              return (
                                <ProjectCard key={index} {...project} />
                              )
                            else  
                              return <div key={index}></div>
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt=""></img> */}
    </section>
  )
}
