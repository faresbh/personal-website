import React from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">
          <div className="column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-mobile-alt"></i>
              </span>
              <h2 className="title is-5">Mobile Development</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Mobile Development"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>
          <div className="column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-laptop-code"></i>
              </span>
              <h2 className="title is-5">Software Development</h2>
            </div>
            <SkillsList
              skills={Resume.skills
                .filter(skill => skill.keywords.includes("Software Development"))
                .reduce((obj, item) => {
                  obj[item.name] = item.level;
                  return obj;
                }, {})}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
