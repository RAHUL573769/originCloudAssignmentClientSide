import React from "react";
import cloud from "../Images/cloud.JPG";

const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={cloud} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Cloud Technology</h1>
            <p class="py-6">
              Cloud computing technology gives users access to storage, files,
              software, and servers through their internet-connected devices:
              computers, smartphones, tablets, and wearables. Cloud computing
              providers store and process data in a location that's separate
              from end users.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
