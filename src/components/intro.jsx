import React from "react";
import portrait from "../img/profile.jpg";
import Typed from "react-typed";
import NameParticles from "./name-particles";
class Intro extends React.Component {

  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">

                <h1 class="intro-title mb-4">Hello, My Name Is</h1>
                <div className="name-container">
                  <NameParticles></NameParticles>
                </div>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    <Typed
                      strings={[
                        "Back End Developer",
                        "Software Engineer",
                        "Front End Developer",
                        "Machine Learning Engineer"
                      ]}
                      typeSpeed={50}
                      backDelay={1100}
                      backSpeed={30}
                      loop
                    />
                  </strong>
                </p>
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#skills"
                    role="button"
                  >
                    View My Portfolio
                  </a>
                </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
