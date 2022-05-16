import React from "react";

const Progress = (props) => {
  const { name, percentage } = props;
  return (
    <div className="skill-progress-single-item">
      <span className="tag">{name}</span>
      <div className="skill-box">
        <div
          className="progress-line"
          data-width={percentage}
          style={{ width: `${percentage}%` }}
        >
          <span className="skill-percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
