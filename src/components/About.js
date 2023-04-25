import { useContext } from "react";
import NavContext from "../context/navContext";

import userInfo from "../utils/userInfo";
import skills from "../utils/skills";
import experiences from "../utils/experience";
import educations from "../utils/education";

const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          To me, it is a source of creativity, innovation, and wonder.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a Freelance Full stack Developer based in Sao Paulo, Brazil.<br />
              I strives to build immersive and beautiful web applications
              through carefully crafted code and user-centric design.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                {Object.entries(userInfo).map(([key, value], index) => (
                  (index % 2 === 0) ? (
                    <li key={key}>
                      <h6>
                        <span className="font-weight-600">{key}</span>
                        {value}
                      </h6>
                    </li>
                  ) : null
                ))}
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                {Object.entries(userInfo).map(([key, value], index) => (
                  (index % 2 === 1) ? (
                    <li key={key}>
                      <h6>
                        <span className="font-weight-600">{key}</span>
                        {value}
                      </h6>
                    </li>
                  ) : null
                ))}
              </ul>
            </div>
            {/* <div className="col-12 resume-btn-container">
              <a href="../public/cv.pdf" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div> */}
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {
                  experiences.map((experience, idx) => (
                    <div className="item">
                      <span className="bullet" />
                      <div className="card">
                        <div className="card-header">
                          <span className="year">
                            <i className="fa fa-calendar" />
                            <i className="fa fa-caret-right" />
                            {experience.fromYear} - {experience.toYear}
                          </span>
                          <span className="d-block font-weight-400 uppercase">
                            {experience.jobTitle}
                            <span className="separator" />
                            <span className="font-weight-700">{experience.company}</span>
                          </span>
                        </div>
                        <div className="card-body">
                          <p>
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                {
                  educations.map((education, idx) => (
                    <div className="item">
                      <span className="bullet" />
                      <div className="card">
                        <div className="card-header">
                          <span className="year">
                            <i className="fa fa-calendar" />
                            <i className="fa fa-caret-right" />
                            {education.fromYY} - {education.toYY}
                          </span>
                          <span className="d-block font-weight-400 uppercase">
                            {education.degree}
                            <span className="separator" />
                            <span className="font-weight-700">
                              {education.school}
                            </span>
                          </span>
                        </div>
                        <div className="card-body">
                          <p>
                            {education.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {
              skills.map((skill, idx) => (
                <div className="col-12 col-sm-6 col-md-4" key={idx}>
                  <span className="skill-text">{skill.title}</span>
                  <div className="chart-bar">
                    <span
                      className="item-progress"
                      data-percent={skill.title}
                      style={{ width: skill.percent + "%" }}
                    />
                    <span className="percent" style={{ right: "calc(" + (100 - skill.percent) + "% - 21px)" }}>
                      {skill.percent + "%"}
                      <b className="arrow" />
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
