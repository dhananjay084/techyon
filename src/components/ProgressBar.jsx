import React from "react";

const ProgressBar = ({ start, end, showMargin }) => {
  const percentage = Math.round(((start - 0) / (end - 0)) * 100);

  const marginStyle = showMargin ? { margin: '30px 0' } : {};

  return (
    <div className="progress-bar" style={marginStyle}>
      <span className="start-value">{start}</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage}%` }}
        >
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <span className="end-value">{end}</span>
    </div>
  );
};

export default ProgressBar;
