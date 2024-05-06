import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/devolopper-removebg-preview.png";
import { Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import fileUrl from '../assets/files/Mohamed_Rami_Jebali_CV.pdf'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300);
  const toRotate = [ "Software Engineer", "Web Developer" ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }

  const handleDownload = () => {
    window.open(fileUrl, '_blank');
  };
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* <Col xs={12} md={6} xl={7}> */}
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Mohamed Rami`} <br/> <span className="txt-rotate" data-rotate='[ "Software Engineer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I am Mohamed Rami Jebali, a dedicated software engineering student with a passion for crafting innovative solutions. Currently, I am enrolled in a software engineering program, where I am gaining a solid foundation in programming, software development, and problem-solving.
                  </p>
                  <button onClick={handleDownload}>My Resume <Download size={25} /></button>
              </div>}
            </TrackVisibility>
          {/* </Col> */}
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
