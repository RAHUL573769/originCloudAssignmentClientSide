import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/FirebaseInit";

const Headers = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile">User Profile</Link>
      </li>
      <li>
        <Link to="/view">User Profile View</Link>
      </li>

      <li>
        <Link to="/addProjects">Add Projects</Link>
      </li>
      <li>
        <Link to="/viewProjects">View Projects</Link>
      </li>
      <li>
        {user ? (
          <button onClick={logout} class="btn btn-primary">
            Sign Out
          </button>
        ) : (
          <Link to="/registration">User Login</Link>
        )}
      </li>

      {/* <li>
        <Link>Item 3</Link>
      </li> */}
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a
            href="https://www.zaubacorp.com/company/ORIGIN-CLOUD-TECHNOLOGIES-PRIVATE-LIMITED/U72200TG2019PTC135732#:~:text=Origin%20Cloud%20Technologies%20Private%20Limited%20is%20a%20Private%20incorporated%20on,paid%20up%20capital%20is%20Rs."
            class="btn btn-ghost normal-case text-xl"
          >
            Origin Cloud Technologies
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Headers;
