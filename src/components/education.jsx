import React from "react";
import wsu from "../img/wsu.svg"
import seattleu from "../img/seattleu.svg"

class Education extends React.Component {
  render() {
    return (
      <section id="education" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rounded-box">

                <div className="title-box text-center">
                  <h3 className="title-a">Education</h3>
                  <div className="school-container">


                    <div className="school-container-image">
                      <img src={wsu} alt="wsu logo" style={{ maxWidth: "250px", maxHeight: "250px" }}></img>
                    </div>
                    <div className="school-container-text">
                      <p className="school-header">Washington State University</p>
                      <p>B.S. Software Engineering</p>
                      <p>Fall 2021 - Spring 2023</p>
                    </div>
                  </div>
                  <div className="school-container">
                    <div className="school-container-image">
                      <img src={seattleu} alt="seattleu logo" style={{ maxWidth: "220px", maxHeight: "220px" }}></img>
                    </div>
                    <div className="school-container-text">
                      <p className="school-header">Seattle University</p>
                      <p>Undergraduate</p>
                      <p>Fall 2018 - Spring 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Education;
