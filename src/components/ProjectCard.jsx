import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ProjectCard = ({ id, title, shortDescription, images, links }) => {
  return (
    <Col size={12} sm={6} md={4} style={{display: "flex", alignItems: "center"}}>
      {/* <a href={link} target="_blank"> */}
        <div className="proj-imgbx">
          <img src={images[0]} alt=""/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{shortDescription}</span>
            <div className="proj-overlay">
              {/* {links?.demo ? 
                <button className="demo" onClick={handleDemo}>
                <PlayFill size={25} />
                Live Demo
                </button> : <></> 
              }
              <button className="repo" onClick={handleRepo}>
              <Github size={25} />
              Source Code
            </button> */}
            <Link to={`/projects/${id}`}>
              <button>
                More Details
              </button>
            </Link>
            </div>
          </div>
        </div>  
      {/* </a> */}
    </Col>
  )
}
