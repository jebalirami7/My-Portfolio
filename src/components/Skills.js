import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.svg";
import typescript from "../assets/img/typescript.png";
import node from "../assets/img/node.png";
import mongo from "../assets/img/mongo.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import figma from "../assets/img/figma.png";
import postgres from "../assets/img/postgres.png";
import angular from "../assets/img/angular.png";
import mysql from "../assets/img/mysql.png";
import springboot from "../assets/img/springboot.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "React Js", image: react },
    { name: "Angular", image: angular },
    { name: "Node Js", image: node },
    { name: "TypeScript", image: typescript },
    { name: "Spring Boot", image: springboot },
    { name: "MongoDB", image: mongo },
    { name: "Postgres", image: postgres },
    { name: "MySQL", image: mysql },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Figma", image: figma },
    // { name: "Postman", image: postman },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text. */}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.image} alt={skill.name} />{" "}
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
    </section>
  );
};
