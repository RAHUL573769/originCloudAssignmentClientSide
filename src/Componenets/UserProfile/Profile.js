import React from "react";

const Profile = () => {
  return (
    <div>
      <div class="h-screen flex  justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">User Profile</h2>
            <div>
              <p> Name</p>
              <input
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
                required
              />
              <p>Email</p>
              <input
                type="email"
                placeholder="Type Email here"
                class="input w-full max-w-xs"
                required
              />
              <p>Name of City</p>
              <input
                type="text"
                placeholder="Type City Name here"
                class="input w-full max-w-xs"
                required
              />
              <p>Phone Number</p>
              <input
                type="number"
                placeholder="Enter Phone Number"
                class="input w-full max-w-xs"
                required
              />
              <p>Date of Birth</p>

              <input type="date" name="start" id="" />
            </div>

            <div class="card-actions justify-end">
              <button class="btn btn-primary"> Add Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
