import React from "react";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills:
        [{
          title: "Languages",
          content: [{
            id: "Python_skill",
            content: "Python",
            percentage: "95%",
            value: "95"
          },
          {
            id: "C#_skill",
            content: "C#",
            percentage: "95%",
            value: "95"
          },
          {
            id: "Java_skill",
            content: "Java",
            percentage: "95%",
            value: "95"
          },
          {
            id: "SQL_skill",
            content: "SQL",
            percentage: "90%",
            value: "90"
          },
          {
            id: "TypeScript_skill",
            content: "TypeScript",
            percentage: "85%",
            value: "85"
          },
          {
            id: "HTML_skill",
            content: "HTML",
            percentage: "85%",
            value: "85"
          },
          {
            id: "CSS_skill",
            content: "CSS",
            percentage: "75%",
            value: "75"
          },
          {
            id: "JavaScript_skill",
            content: "JavaScript",
            percentage: "75%",
            value: "75"
          },
          {
            id: "Cplusplus_skill",
            content: "C++",
            percentage: "70%",
            value: "70"
          }
          ]
        },
        {
          title: "Tech Stack",
          content: [{
            id: "git_skill",
            content: "Git",
            percentage: "95%",
            value: "95"
          },
          {
            id: "docker_skill",
            content: "Docker",
            percentage: "80%",
            value: "80"
          },
          {
            id: "react_skill",
            content: "React",
            percentage: "85%",
            value: "85"
          },
          {
            id: "jquery_skill",
            content: "JQuery",
            percentage: "75%",
            value: "75"
          },
          {
            id: "kubernetes_skill",
            content: "Kubernetes",
            percentage: "75%",
            value: "75"
          },
          {
            id: "FastAPI_skill",
            content: "FastAPI",
            percentage: "85%",
            value: "85"
          },
          {
            id: "cloud_skill",
            content: "Cloud Storage (GCS, S3)",
            percentage: "85%",
            value: "85"
          },
          {
            id: "pytorch_skill",
            content: "PyTorch",
            percentage: "80%",
            value: "80"
          },
          {
            id: "tensorflow_skill",
            content: "Tensorflow",
            percentage: "70%",
            value: "70"
          },
          {
            id: "pandas_skill",
            content: "Pandas",
            percentage: "85%",
            value: "80"
          },
          {
            id: "jquery_skill",
            content: "JQuery",
            percentage: "75%",
            value: "75"
          }]
          
        },
        {
          title: "Paradigms",
          content: [{
            id: "OOP",
            content: "Object Oriented Programming",
            percentage: "95%",
            value: "95"
          },
          {
            id: "CBP",
            content: "Component-Based Programming",
            percentage: "90%",
            value: "90"
          },
          {
            id: "FP",
            content: "Functional Programming",
            percentage: "80%",
            value: "80"
          },
          ]
        },
        {
          title: "Methodologies",
          content: [{
            id: "Waterfall",
            content: "Waterfall Model",
            percentage: "95%",
            value: "95"
          },
          {
            id: "Incremental",
            content: "Incremental Model",
            percentage: "90%",
            value: "90"
          },
          {
            id: "Agile",
            content: "Agile",
            percentage: "80%",
            value: "80"
          },
          ]
        },
        ]
    }
  }

  render() {
    return (
      <section id="skills" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rounded-box">
                <div className="title-box text-center">
                  <h3 className="title-a">Skills</h3>
                  <div className="skill-grid">
                        {this.state.skills.map(header => {
                          return (
                            <React.Fragment key={header.title}>
                              <div className="skill-grid-item">
                              <div
                                className="col-sm-6 col-md-5"
                                style={{ margin: "10px auto" }}
                              >
                                <h3 className="skill-subheader">{header.title}</h3>
                              </div>
                              <div className="skill-mf">
                                {header.content.map(skill => {
                                  return (
                                    <React.Fragment key={skill.id}>
                                      <span>{skill.content}</span>{" "}
                                      <span className="pull-right">
                                        {skill.percentage}
                                      </span>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          role="progressbar"
                                          style={{ width: skill.percentage }}
                                          aria-valuenow={skill.value}
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                              </div>
                            </React.Fragment>);
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

export default Skills;
