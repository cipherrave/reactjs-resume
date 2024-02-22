import locationIcon from "./assets/location.svg";
import telephoneIcon from "./assets/telephone.svg";
import emailIcon from "./assets/email.svg";
import linkedInIcon from "./assets/linkedin.svg";
import logo from "./assets/logo.svg";
import myPic from "./assets/mypic.jpg";
import React, { useRef } from "react";

function App() {
  const aboutSectionRef = useRef();
  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const careerSectionRef = useRef();
  const scrollToCareerSection = () => {
    careerSectionRef.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const skillsSectionRef = useRef();
  const scrollToSkillsSection = () => {
    skillsSectionRef.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const achievementSectionRef = useRef();
  const scrollToAchievementSection = () => {
    achievementSectionRef.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const historySectionRef = useRef();
  const scrollToHistorySection = () => {
    historySectionRef.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  return (
    <main>
      <div className="sidebarNav">
        <span onClick={scrollToHistorySection} style={{ cursor: "pointer" }}>
          History{" "}
        </span>
        <span
          onClick={scrollToAchievementSection}
          style={{ cursor: "pointer" }}
        >
          Achievements
        </span>
        <span onClick={scrollToSkillsSection} style={{ cursor: "pointer" }}>
          Strengths
        </span>
        <span onClick={scrollToCareerSection} style={{ cursor: "pointer" }}>
          Career Summary
        </span>
        <span onClick={scrollToAboutSection} style={{ cursor: "pointer" }}>
          About Me
        </span>
        <img
          src={logo}
          alt=""
          style={{
            rotate: "90deg",
            height: "30px",
          }}
        />
      </div>
      <div className="content">
        <div className="mainCard" ref={aboutSectionRef}>
          <img className="myPic" src={myPic} />
          <div className="headerText">
            <h1>'Arif Akmal Bin Kamarudin</h1>
            <div className="info">
              <img src={locationIcon} alt="" />
              <p>Semenyih, Selangor</p>
            </div>
            <div className="info">
              <img className="icon" src={telephoneIcon} /> <p>(013) 358-5838</p>
            </div>
            <div className="info">
              <img className="icon" src={emailIcon} />{" "}
              <p>
                <a href="mailto:arif_akmal@hotmail.com">
                  arif_akmal@hotmail.com
                </a>
              </p>
            </div>
            <div className="info">
              <img className="icon" src={linkedInIcon} />{" "}
              <p>
                <a href="https://www.linkedin.com/in/arifakmal">
                  linkedin.com/in/arifakmal
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card" ref={careerSectionRef}>
          <h1>Career Summary</h1>
          <p>
            Forward-thinking professional with 2 years of experience
            specialising in process optimisation and digital transformation.
            Skilled in designing and implementing workflows that align with the
            company's digitalisation initiatives. Adept at researching, training
            and upskilling existing workforce to navigate and embrace digital
            advancements. Committed to enhancing operational readiness and
            driving organisations digital evolution.{" "}
          </p>
        </div>
        <div className="card" ref={skillsSectionRef}>
          <h1>Strengths</h1>
          <p>
            <b>Technology Integrator</b> – Strategically plan, conduct research,
            and stretched limited budgets for both hardware and software
            components, sourcing appropriate technology equipment to facilitate
            the implementation of novel teaching pipeline, while ensuring
            adherence to regulatory mandates.
          </p>
          <p>
            <b>Team Player</b> – Engaged in cross-functional collaboration with
            individuals from diverse departments and backgrounds in order to
            achieve specific project goals.
          </p>
          <p>
            <b>Talent Acquisition and Development</b> – Helped in the
            recruitment and discerning talent selection for MAB Academy's
            in-house Computer Based Training (CBT) Program, contributing to the
            development of a proficient and capable workforce to tackle project
            goals.
          </p>
          <p>
            <b>Research and Development</b> – Actively researching into adopting
            new technologies to be implemented into work processes and for
            teaching purposes such as Virtual Reality use in training, virtual
            aircraft tours in TMS modules using Articulate 360.
          </p>
        </div>
        <div className="card" ref={achievementSectionRef}>
          <h1>Achievements</h1>
          <p>
            {" "}
            Strategised, and work with MAB Academy to create MABA Green Screen
            Studio, which now becomes one stop studio for online classes and
            audio video related works that benefited not only the academy but
            MAG Subsidiaries.
          </p>
          <p>
            {" "}
            Formulated and executed comprehensive strategies for online/hybrid
            events, resulting MAB Academy to be a viable selection for hosting
            digital events, benefiting MAG and MAB Academy external clients.
            These workflows encompassed intricate audio video and technological
            integration with Microsoft Teams, Google Meet and Zoom.
          </p>
          <p>
            {" "}
            Provided comprehensive training to existing workforce, enabling them
            to adeptly navigate emerging technologies, with the goal of
            positioning MAB Academy as a digital-ready training institution.
          </p>
          <p>
            {" "}
            Crafting multimedia contents for used in teaching materials by
            instructors, company events and company both for business and CSR
            efforts such as Woman@MAG.
          </p>
          <p>
            {" "}
            Repurposing unused inventories and equipments into new digital
            workflow as part of a company wide effort to become more sustainable
            in its operations.
          </p>
        </div>
        <div className="card" ref={historySectionRef}>
          <h1>Work History</h1>
          <p>
            <b>Digital Transformation Team</b> MAB Academy | January
            2021-December 2022
          </p>
          <p>
            <b>Freelance Multimedia Editor</b> | March 2016-May 2019
          </p>
          <h1>Education</h1>
          <p>
            <b>ATPL</b> | 2020, International Aero Training Academy, Melaka
          </p>
          <p>
            <b>Bachelor of Engineering (Honours) Mechanical Engineering</b> |
            2018, Taylor’s University, Subang, Selangor
          </p>
          <h1>Skills</h1>
          <p>
            Microsoft 365 | Adobe Creative Suite | VR/AR Integration | 3D
            Printing | HTML5 | CSS | Javascript | PostgreSQL | Node.js |
            React.js
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
