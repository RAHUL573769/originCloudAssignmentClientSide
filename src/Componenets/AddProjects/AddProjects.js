import React, { useRef } from "react";

const AddProjects = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const categoriesRef = useRef();

  const handleProjects = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const start = startRef.current.value;
    const end = endRef.current.value;
    const categories = categoriesRef.current.value;

    console.log(name, description, start, end, categories);

    const finalData = {
      name: name,
      description: description,
      start: start,
      end: end,
      categories: categories,
    };

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast("Todo Task Added Succesfully");
      });
  };
  return (
    <div class="h-screen flex  justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add Projects Here</h2>
          <div>
            <p>Project Name</p>
            <input
              ref={nameRef}
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
              required
            />
            <p>Project Description</p>
            <input
              ref={descriptionRef}
              type="text"
              placeholder="Type here"
              class="input w-full max-w-xs"
              required
            />
            <p>Start Date</p>

            <input ref={startRef} type="date" name="start" id="" />
            <p>End Date</p>

            <input ref={endRef} type="date" name="end" id="" />
          </div>
          <p>Project Categories</p>
          <input
            type="text"
            ref={categoriesRef}
            placeholder="Type here"
            class="input w-full max-w-xs"
            required
          />
          <div class="card-actions justify-end">
            <button onClick={handleProjects} class="btn btn-primary">
              Click To Add Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjects;
