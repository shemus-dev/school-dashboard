import React, { useState } from "react";
import Schoolimage from "../Images/Eduvod_Log.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "./api";
import toast, { Toaster } from "react-hot-toast";
import { EyeIcon,EyeSlashIcon } from "@heroicons/react/16/solid";

function Login() {

  const notify = () => toast.success('Here is your toast.');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  
 function validateEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    // function validatePassword(password) {
    //    return password.length >= 6test(password);
    // }
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
   if (!validateEmail(email)) {
     toast.error("Please enter a valid email address.");
     return;
   }
  //  if (!validatePassword(password)) {
  //    toast.error("Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.");
  //    return;
  //  }
   setError
    try {
      // Show loading state
      const loadingToast = toast.loading("Logging in...");
       
      // Use the configured axiosInstance
      const response = await axiosInstance.post("/api/v1/auth/superadmin/login", { 
        email, 
        password 
      });
      
      // Success handling
      localStorage.setItem("authToken", response.data.token);
      
      toast.dismiss(loadingToast);
      toast.success("Login successful! Redirecting...");
      
      setTimeout(() => navigate("/dashboard"), 2000);
      // //send a request
      // const response = await axios.post("/api/v1/auth/superadmin/login",{ email, password },
      // { headers: { "Content-Type": "application/json"}}                                     
      // );
      // // Store token securely (use httpOnly cookies in production)
      // localStorage.setItem("authToken", response.data.token);
      // setTimeout(() => navigate("/dashboard"), 2000)
      
    } catch (error) {
      //handle error
      if  (error.response) {
        setError(error.response.data.error || "Login failed. Please try again.")
      }else if (error.request) {
        // No response (network error)
        toast.error("Network error. Check your connection.");
      } else {
        // Other errors
        toast.error("An unexpected error occurred.");
      }
        
      
    }
    

   }

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="flex min-h-screen justify-center shadow-xl border m-0   rounded-2xl ">
        <div className="flex-1 p-6 ">
          <div>
            <img src={Schoolimage} alt="" />
            <div className="">
            
            <p className="flex justify-center text-blue-500 ">Join us in making a better community </p>
          </div>
          </div>
          
        </div>
        <div className="flex-1 p-20">
          {/* form creation happens */}
          
            <h1 className="flex justify-center text-3xl font-semibold text-blue-600">Log in to your account</h1>
            <p className="opacity-60 mt-3 flex justify-center">
              Welcome Back! Login in into your account
            </p>
             
      
            <div className="flex-1 h-full  flex justify-center items-center  rounded-md shadow-md">
              
              <form onSubmit={handleSubmit}>
                  <div className="flex justify-center items-center">
                    <input
                      type="text"
                      name="email"
                      className="border border-gray-600 p-2  rounded-md mb-4 w-[300px]"
                      onChange={(e) => {setEmail(e.target.value); setError("") }}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <input
                      type= {showPassword ? "text" : "password"}
                      name="password"
                      className="border border-gray-600 p-2 rounded-md mb-4 w-full pr-10"
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder="Enter Password " 
                      
                    />
                    <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        )}
        </div>
                  </div>
                  <div className="flex justify-center text-sm border-lime-50 pb-6">
                    <Link to ="/forgot_password" className="text-blue-500 hover:underline" >  Forgot Password?
                    </Link>

                  </div>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-400 text-white p-2 rounded w-[150px] hover:bg-blue-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      
                      {" "}
                      Sign in
                    </button>
                  
                  </div>
              
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}


export default Login;
