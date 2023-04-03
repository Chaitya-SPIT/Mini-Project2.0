import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen flex flex-col justify-between bkgrd">
      <h1 className="text-center text-white text-3xl bg-gray-800 py-2">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button
        className="text-center text-white pb-5"
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "Need to sign up?" : "Already have an account?"}
      </button>
    </div>
  );
}

export default AuthPage;
