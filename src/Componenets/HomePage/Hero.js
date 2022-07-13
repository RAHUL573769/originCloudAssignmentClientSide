import React from "react";
import image from "../Images/Capture.JPG";

const Hero = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={image} />
          <div>
            <h1 class="text-5xl font-bold">Technologies</h1>
            <p class="py-6">
              Technology is the result of accumulated knowledge and application
              of skills, methods, and processes used in industrial production
              and scientific research. Technology is embedded in the operation
              of all machines, with or without detailed knowledge of their
              function, for the intended purpose of an organizatio
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
