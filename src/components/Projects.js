import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import donkeyKong from "../assets/img/projects/Classic-Donkey-Kong-Demo-Picture.png"
import mesaVerde from "../assets/img/projects/acceuil-messa-verde.png"

export const Projects = () => {

  const webProjects = [
    // {
    //   title: "CPC Enicarthage",
    //   description: "Problem Solving Platform",
    //   imgUrl: projImg3,
    //   links: {
    //     repo: "https://github.com/YassineBenAbdelaziz/CPC-Platform",
    //     demo: "https://google.com"
    //   }
    // },
    {
      title: "Mesa Verde Bank",
      description: "Complaints Management Website For a Bank.",
      imgUrl: mesaVerde,
      links: {
        repo: "https://github.com/jebalirami7/mesa-verde-bank",
        demo: "https://webproject-pied.vercel.app/"
      }
    },
  ];

  const mobileProjects = [
    
  ];

  const desktopProjects = [
    {
      title: "Claasic Donkey Kong",
      description: "A classic 2D game using Java and JavaFx.",
      imgUrl: donkeyKong,
      links: {
        repo: "https://github.com/jebalirami7/Classic-Donkey-Kong",
      }
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                      {
                        webProjects.length > 0 ?
                          <Row>
                          {
                            webProjects.map((project, index) => {
                              return (
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row> : 
                        <p>
                          No Apps At The Moment.
                        </p>
                      }
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {
                        mobileProjects.length > 0 ?
                          <Row>
                          {
                            mobileProjects.map((project, index) => {
                              return (
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row> : 
                        <p>
                          No Apps At The Moment.
                        </p>
                      }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {
                        desktopProjects.length > 0 ?
                          <Row>
                          {
                            desktopProjects.map((project, index) => {
                              return (
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row> : 
                        <p>
                          No Apps At The Moment.
                        </p>
                      }
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt=""></img> */}
    </section>
  )
}
