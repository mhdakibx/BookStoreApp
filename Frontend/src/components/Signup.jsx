import React, { use, useLayoutEffect } from "react";
import { Link, } from "react-router-dom";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit  = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data){
        toast.success("Signup successful! Please login.");
        navigate(  from, {replace: true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err) => {
      if(err.response){
        toast.success("Error: " + err.response.data.message);
      }
    });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-md p-6 border rounded-lg bg-base-100 shadow-lg"
      >
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-2xl text-center mb-6">Signup</h3>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 border rounded-md outline-none bg-base-200"
            {...register("fullname", { required: "Name is required" })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none bg-base-200"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none bg-base-200"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 mt-6">
          <button
            type="submit"
            className="w-full md:w-auto bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200"
          >
            Signup
          </button>

          <p className="text-center md:text-left">
            Have account?{" "}
            <button
              type="button"
              className="underline text-blue-500"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Login
            </button>
            <Login />
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
