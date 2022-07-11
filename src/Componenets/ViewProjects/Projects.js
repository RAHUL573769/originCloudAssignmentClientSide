import React, { useEffect, useState } from "react";
import SingleProjects from "./SingleProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });

  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7 mx-4 ">
      {projects.map((project) => (
        <SingleProjects project={project}></SingleProjects>
      ))}
    </div>
  );
};

export default Projects;
