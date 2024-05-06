import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { PlayFill, Github } from 'react-bootstrap-icons';
import { projects } from "./Projects"

export const ProjectDetails = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const {title} = useParams();
    let project = {};
    for (let prj of projects) {
        if (title === prj.title) {
            project = prj;
            console.log(prj);
            break;
        }
    }

    const handleRepo = () => {
        window.open(project.links.repo, '_blank');
    };

    const handleDemo = () => {
        window.open(project.links.demo, '_blank');
    };
    
    return (
        <div className="project-page" id="project">
            <div className="project-bx wow zoomIn">
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <div className="date">
                        {project.date}
                    </div>
                    <p>
                        {project.description}                   
                    </p>
                    {project.links?.demo ? 
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
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme project-slider"
                >
                    {project.images.map((image, index) => (
                    <div className="item" key={index}>
                        <img src={image} alt="img" />{" "}
                    </div>
                    ))}
                    <div className="item">
                        <video src={project.video} alt="video" controls />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};