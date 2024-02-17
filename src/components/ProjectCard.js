import { Col } from "react-bootstrap";
import { PlayFill, Github } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, links }) => {

  const handleRepo = () => {
    window.open(links.repo, '_blank');
  };

  const handleDemo = () => {
    window.open(links.demo, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4} style={{display: "flex", alignItems: "center"}}>
      {/* <a href={link} target="_blank"> */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt=""/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="proj-overlay">
              {links?.demo ? 
                <button className="demo" onClick={handleDemo}>
                  <PlayFill size={25} />
                  Live Demo
                </button> : <></> 
              }
              <button className="repo" onClick={handleRepo}>
                <Github size={25} />
                Source Code
              </button>
            </div>
          </div>
        </div>  
      {/* </a> */}
    </Col>
  )
}
