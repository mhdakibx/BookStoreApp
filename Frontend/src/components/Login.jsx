import React from "react";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res) => {
          console.log(res.data);
          if(res.data){
            toast.success("Login successful! Welcome back.");

            document.getElementById("my_modal_3").close();
            
            setTimeout(() => {
              window.location.reload();
              localStorage.setItem("Users",JSON.stringify(res.data.user))
            }, 1000);
            
          }
          ;
        }).catch((err) => {
          if(err.response){
            toast.error("Error: " + err.response.data.message);
            setTimeout(() => {}, 3000);
          }
        });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-md p-6 border rounded-lg bg-base-100 shadow-lg relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-2xl text-center mb-6">Login</h3>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none bg-base-200"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none bg-base-200"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 mt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p className="text-center md:text-left">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
