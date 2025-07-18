import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Enter a valid Email Address");
      toast("Enter a valid Email Address");
    }
    //api
    setError("");
    setMessage(
      "If an account with this email exists, a reset link has been sent."
    );
    toast("react hot toast here")
    //If the email is empty, show an error.If filled, simulate success by setting a message.
  };
  return (
    <div className="flex  justify-center items-center min-h-full h-full w-full bg-gray-100">
      <div className="p-8 rounded-lg shadow-lg bg-white m-auto">
        <h2 className="text-2xl text-blue-600 font-semibold text-center mb-4">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to receive password reset instructions.
        </p>
        <form onSubmit={handleReset} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        !,ternry operator ??
          {error ? <p className="text-red-500 text-sm">{error}</p>:""}
          {message && <p className="text-green-600 text-sm">{message}</p>}
          <Link to = "/" className=" flex justify-center text-blue-500 hover:underline" >Back to login </Link>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Confirm Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
