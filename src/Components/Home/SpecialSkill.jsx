import React from "react";
import { Link } from "react-router-dom";
import Progress from "./progress";

const SpecialSkill = () => {
  return (
    <>
      <div className="skill-display-section section-gap-tb-165 section-bg pos-relative">
        <div className="skill-display-section-box">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-xxl-5">
                {/* Start Section Content */}
                <div className="section-content">
                  <span className="section-tag">Special Skills</span>
                  <h2 className="section-title">
                    My Special Skill Field Here.
                  </h2>
                  <Link
                    to="#"
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <i className="icofont-download" />
                  </Link>
                </div>
                {/* End Section Content */}
              </div>
              <div className="col-xl-6 col-xxl-6 offset-xxl-1">
                {/* Start Skill Display Wrapper */}
                <div className="skill-display-wrapper">
                  {/* Start Skill Progress Single Item */}
                  <Progress name={"Communication"} percentage={"75"} />
                  <Progress name={"Leadership"} percentage={"70"} />
                  <Progress name={"Teamwork"} percentage={"90"} />
                  <Progress name={"Flexibility"} percentage={"80"} />
                  {/* ENd Skill Progress Single Item */}
                </div>
                {/* End Skill Display Wrapper */}
              </div>
            </div>
          </div>
        </div>
        <div className="skill-display-shape" />
      </div>
    </>
  );
};

export default SpecialSkill;
