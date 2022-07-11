import React from "react";

const SingleProjects = ({ project }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {console.log(project)}
          <h2 class="card-title">{project.name}</h2>
          <p>Description:{project.description}</p>
          <p>Start Date:{project.start}</p>
          <p>End Date:{project.end}</p>
          <p>Categories:{project.categories}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;
