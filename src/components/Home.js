import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="Home">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

