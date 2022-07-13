import React from "react";

const Single = ({ user }) => {
  return (
    <div>
      <div class="card w-96  text-primary-content">
        <div class="card-body">
          <h2 class="card-title">{user.profile}</h2>
          <p>Email :{user.email}</p>
          <p>City :{user.city}</p>
          <p>Phone :{user.phone}</p>
          <p>Phone :{user.birth}</p>
          <div class="card-actions justify-end">
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
