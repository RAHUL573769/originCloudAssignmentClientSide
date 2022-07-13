import React, { useEffect, useState } from "react";
import Single from "./Single";

const Profiles = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => setUser(data));
  });
  //   console.log(users);
  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7 mx-4 ">
      {users.map((user) => (
        <Single key={user._id} user={user}></Single>
      ))}
    </div>
  );
};

export default Profiles;
