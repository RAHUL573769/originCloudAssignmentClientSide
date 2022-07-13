import React from "react";

const SingleProjects = ({ project }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    const proceed = window.confirm("Are you sure you want to Delete?");
    if (proceed) {
      const url = `http://localhost:5000/projects/${_id}`;
      // console.log(url);

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{project.name}</h2>
          <p>Description:{project.description}</p>
          <p>Start Date:{project.start}</p>
          <p>End Date:{project.end}</p>
          <p>Categories:{project.categories}</p>
          <div class="card-actions justify-end">
            <button
              onClick={() => handleDelete(project._id)}
              class="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;
