import React from "react";
import PropTypes from "prop-types";

const UniClock = ({ className }) => {
  return (
    <div className={className}>
      <div className="clock">
        <div className="clock-circles">
          <div className="clock-circles__item"></div>
          <div className="clock-circles__item"></div>
          <div className="clock-circles__item"></div>
          <div className="clock-circles__item">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
        <div className="clock-indicators">
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
          <div className="clock-indicators__item"></div>
        </div>
        <div className="clock-times">
          <div className="clock-times__second"></div>
          <div className="clock-times__minute"></div>
          <div className="clock-times__hour"></div>
        </div>
      </div>
    </div>
  );
};

UniClock.propTypes = {
  className: PropTypes.string,
};

export default UniClock;
