import React from "react";
import links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {props.bio !== "" ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
