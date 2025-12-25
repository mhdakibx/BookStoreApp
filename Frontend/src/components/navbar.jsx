import { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout.jsx";

import { useAuth } from "../context/Authprovider.jsx";


export default function Navbar() {

  const [authUser, setAuthUser] = useAuth();
  
  

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    // DaisyUI theme apply
    element.setAttribute("data-theme", theme);

    // Tailwind dark class apply
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, element]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <div
      className={`w-full  fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar  max-w-6xl mx-auto">
        {/* Navbar start: Logo + Hamburger */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer mr-0 sm:left-0">CPIstore</a>
        </div>

        {/* Navbar center: Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Navbar end: Search + Button */}
        <div className="navbar-end flex items-center gap-2 lg:gap-6">
          {/* Search input */}
          <div className="hidden md:block">
            <label className="relative border rounded-md px-3 py-2 w-32 md:w-48 flex items-center">
              <svg
                className="absolute left-2 h-5 w-5 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="pl-9 w-full outline-none dark:text-white"
              />
            </label>
          </div>

          {/* Theme toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />

            {/* Sun Icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon Icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {/* Auth Button */}
          {
            authUser ? <Logout /> : 
            
          <div>
            <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={()=>
          document.getElementById("my_modal_3").showModal()}>
            Login
          </a>
          <Login />
        </div>
          }

          </div>
      </div>
    </div>
  );
}
