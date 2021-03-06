import styled from "styled-components";
import Clock from "./component";

const transformHourHand = ({ hoursDegree = -90 }) =>
  `rotate(${hoursDegree}deg)`;
const transformMinuteHand = ({ minutesDegree = -90 }) =>
  `rotate(${minutesDegree}deg)`;
const transformSecondsHand = ({ secondsDegree = -90 }) =>
  `rotate(${secondsDegree}deg)`;

const StyledClock = styled(Clock)`
  padding: 30px 0;
  background: url("https://www.photohdx.com/images/2014/11/blue-wall-texture-background.jpg");
  section {
    width: 80vmin;
    height: 80vmin;
    margin: auto;
    background: #fff
      url("https://tritownregistries.com/wp-content/uploads/2016/04/white-linen-paper-texture-whiter-1024x683.jpg")
      center center;
    border: 3vmin solid #000;
    border-radius: 50%;
    margin-top: 3vmin;
    box-shadow: inset 40px 40px 90px rgba(0, 0, 0, 0.2),
      inset 10px 10px 30px rgba(0, 0, 0, 0.5), 20px 20px 30px rgba(0, 0, 0, 0.4),
      40px 40px 60px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 1;
  }

  section:before {
    content: "";
    width: 95%;
    height: 95%;
    border-radius: 50%;
    display: block;
    background: transparent;
    border: 2vmin solid white;
  }

  /* highlight at top left of black outline */
  section:after {
    content: "";
    width: 105%;
    height: 105%;
    border-radius: 50%;
    display: block;
    background: transparent;
    position: absolute;
    top: -2.5%;
    left: -2.5%;
    box-shadow: -3px -3px 9px rgba(255, 255, 255, 0.8);
  }

  .label {
    position: absolute;
    top: 19vmin;
    left: 46%;
    font-size: 2.5vmin;
  }

  .hourhand,
  .secondhand,
  .minutehand {
    width: 25vmin;
    height: 2vmin;
    background: #000;
    position: absolute;
    top: 40vmin;
    left: calc(50% - 3.5vmin);
    z-index: 2;
    transform: rotate(-159deg);
    transform-origin: 16%;
  }

  .hourhand:after,
  .secondhand:after,
  .minutehand:after {
    content: "";
    background: #000;
    width: 5vmin;
    height: 5vmin;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: -1.5vmin;
    left: 1.5vmin;
  }

  .hourhand {
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
    box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.4);
    transform: ${transformHourHand};
  }

  .minutehand {
    width: 40vmin;
    height: 1vmin;
    top: 40.5vmin;
    transform: ${transformMinuteHand};
    transform-origin: 10%;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 30%;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
  }

  .minutehand:before {
    content: "";
    width: 4.5vmin;
    height: 4.5vmin;
    border-radius: 50%;
    z-index: 99;
    position: absolute;
    top: -1.7vmin;
    left: 1.7vmin;
    box-shadow: -2px -2px 7px rgba(255, 255, 255, 0.6);
  }

  .minutehand:after {
    top: -2vmin;
  }

  .secondhand {
    width: 35vmin;
    height: 0.5vmin;
    top: 40.75vmin;
    transform: ${transformSecondsHand};
    transform-origin: 11.5%;
    box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.4);
  }
  .secondhand:after {
    top: -2.25vmin;
  }

  .hour12,
  .hour1,
  .hour2,
  .hour3,
  .hour4,
  .hour5 {
    height: 1vmin;
    width: 55vmin;
    background: transparent;
    border-left: 7vmin solid #000;
    border-right: 7vmin solid #000;
    transform: translate(-50%, -50%);
    /*     transform-origin: right bottom; */
    top: 50%;
    left: 50%;
    position: absolute;
  }

  .hour3 {
    transform: rotate(90deg) translate(0, 34vmin);
  }

  .hour1 {
    transform: rotate(120deg) translate(17vmin, 30vmin);
  }

  .hour2 {
    transform: rotate(150deg) translate(29vmin, 18vmin);
  }

  .hour4 {
    transform: rotate(210deg) translate(30vmin, -17vmin);
  }

  .hour5 {
    transform: rotate(240deg) translate(17vmin, -30vmin);
  }
`;

export default StyledClock;
