import React from "react";

//import stock

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      experience: [
        {
          company: "Seagen",
          location: "Bothell",
          title: "Contractor",
          subheader: " — Supervisor: Christina Fu",
          dates: "2023",
          value: "Used Pandas/NumPy to automate the analysis of pharmacokinetic data and created a web application with Flask to display results."
        },

        {
          company: "Inteum",
          location: "Kirkland",
          title: "Intern",
          subheader: " — Supervisor: Ziyan Zhang",
          dates: "2015",
          value: "Developed a Java and Selenium-based application to scrape customer data from company websites. Assisted in database migration"
        }],
      projects: [
        {
          company: "Math Equation Editor Plugin",
          location: "",
          title: "",
          subheader: " — Supervisor: Robert Pepka",
          dates: "2022",
          value: "WSU Capstone Project for Schweitzer Engineering Laboratories. Used React and TypeScript to create a web based text editor plugin that can save, load and display over one hundred different math components."
        },

        {
          company: "Yelp App",
          location: "",
          title: "",
          subheader: "",
          dates: "2021",
          value: "CptS 451 Database Systems Class Project. Designed and implemented a PostgreSQL database of Yelp reviews in the United States and developed a C# application featuring an interactive map for displaying the results"
        },
        {
          company: "Spreadsheets Application",
          location: "",
          title: "",
          subheader: "",
          dates: "2020",
          value: "CptS 321 Object-Oriented Software Principals Class Project. Leveraged industry-standard software design patterns to develop a sophisticated C# spreadsheet application resembling Microsoft Excel."
        },]

    }


  }
  render() {
    return (
      <section id="experience" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rounded-box">

                <div className="title-box text-center">
                  <h3 className="title-e">Experience</h3>
                  <div className="container">
                    {this.state.experience.map(skill => {
                      return (
                        <React.Fragment key={skill.title}>
                          <div className="exp-container">
                            <div className="exp-title">
                              <div className="exp-h-container">
                                <span className="exp-h">{skill.company}, </span>
                                <span className="exp-h">{skill.location} — </span>
                                <span className="exp-h-title">{skill.title}</span>
                              </div>
                              <div className="exp-sh-container">
                                <span className="exp-sh">{skill.dates}</span>
                                <span className="exp-sh">{skill.subheader}</span>
                              </div>

                            </div>
                            <div className="exp-c-container">
                              <span className="exp-c">{skill.value}</span>
                            </div>

                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <h3 className="title-e">Projects</h3>
                  <div className="container">
                    {this.state.projects.map(skill => {
                      return (
                        <React.Fragment key={skill.title}>
                          <div className="exp-container">
                            <div className="exp-title">
                              <div className="exp-h-container">
                                <span className="exp-h">{skill.company}</span>
                                <span className="exp-h">{skill.location}</span>
                                <span className="exp-h-title">{skill.title}</span>
                              </div>
                              <div className="exp-sh-container">
                                <span className="exp-sh">{skill.dates}</span>
                                <span className="exp-sh">{skill.subheader}</span>
                              </div>


                            </div>
                            <div className="exp-c-container">
                              <span className="exp-c">{skill.value}</span>
                            </div>

                          </div>
                        </React.Fragment>
                      );
                    })}
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


export default Experience;
