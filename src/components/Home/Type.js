import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Systems Programmer",
          "C / Go Enthusiast",
          "Backend & Database Builder",
          "Linux + Docker Tinkerer",
          "Problem Solver with SQL",
          "Always Breaking & Rebuilding",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
