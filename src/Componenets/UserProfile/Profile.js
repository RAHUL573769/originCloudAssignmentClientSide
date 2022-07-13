import React, { useRef } from "react";

const Profile = () => {
  const profileRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();
  const birthRef = useRef();
  const handleSubmit = () => {
    const profile = profileRef.current.value;
    const email = emailRef.current.value;
    const city = cityRef.current.value;
    const phone = phoneRef.current.value;
    const birth = birthRef.current.value;

    console.log(profile, email, city, phone, birth);

    const finalData = {
      profile: profile,
      email: email,
      city: city,
      phone: phone,
      birth: birth,
    };

    console.log(finalData);

    fetch("http://localhost:5000/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast("Products  Added Successfully");
      });
  };
  return (
    <div>
      <div class="h-screen flex  justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">User Profile</h2>
            <div>
              <p> Name</p>
              <input
                ref={profileRef}
                type="text"
                placeholder="Type here"
                class="input w-full max-w-xs"
                required
              />
              <p>Email</p>
              <input
                type="email"
                ref={emailRef}
                placeholder="Type Email here"
                class="input w-full max-w-xs"
                required
              />
              <p>Name of City</p>
              <input
                type="text"
                ref={cityRef}
                placeholder="Type City Name here"
                class="input w-full max-w-xs"
                required
              />
              <p>Phone Number</p>
              <input
                type="number"
                ref={phoneRef}
                placeholder="Enter Phone Number"
                class="input w-full max-w-xs"
                required
              />
              <p>Date of Birth</p>

              <input ref={birthRef} type="date" name="start" id="" />
            </div>

            <div class="card-actions justify-end">
              <button onClick={handleSubmit} class="btn btn-primary">
                {" "}
                Add Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
