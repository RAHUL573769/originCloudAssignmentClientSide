import React from "react";
import auth from "../Firebase/FirebaseInit";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Registration = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
