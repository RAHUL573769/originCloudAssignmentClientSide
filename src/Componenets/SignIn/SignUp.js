import React from "react";

import auth from "../Firebase/FirebaseInit";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error3] = useUpdateProfile(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user || user1) {
    console.log(user);
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/about");
  };

  let errorMessage;
  if (loading || loading1 || updating) {
    return <Loading></Loading>;
  }
  if (error || error1 || error3) {
    errorMessage = (
      <p className="text-red-500">{error?.message || error1?.message}</p>
    );
  }
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name Please"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Is Required",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters longer",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              Already Have An Account?{" "}
              <Link to="/registration" className="text-primary">
                Click To Login
              </Link>
            </p>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
