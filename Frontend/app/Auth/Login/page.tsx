"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
// import {firebaseApp} from "../../Config/firebase";
import { auth } from "../../Config/firebase";
import { FormSubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUser } from "../../context/UserContext";

const provider = new GoogleAuthProvider();

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  // const [user, loading] = useAuthState(auth);
  const { setUser } = useUser();

  // google auth
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ user });
        console.log("Google Login Successful", user);
        setUser(user);
        // Store user details in session
        sessionStorage.setItem("user", JSON.stringify(user));
        // Display success notification
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: false, // 10 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className:
            "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-mediumblue rounded-lg",
        });

        // Redirect to Dashboard
        setTimeout(() => {
          // Redirect to Dashboard
          router.push("/components/Dashboard");
        }, 1000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
        const message = "Invalid Credentials";
        setError(message);
        console.error(`Error: ${message}`);

        // Display error notification
        toast.error(message, {
          position: "top-center",
          autoClose: false, // 10 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className:
            "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-red-500 rounded-lg",
        });
      });
  };

  const signIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Login Successful", user);

      // Store user details in session
      sessionStorage.setItem("user", JSON.stringify(user));
      // Display success notification
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: false, // 10 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-mediumblue rounded-lg",
      });

      // Redirect to Dashboard
      setTimeout(() => {
        // Redirect to Dashboard
        router.push("/components/Dashboard");
      }, 1000);
    } catch (error) {
      const message = "Invalid Credentials";
      setError(message);
      console.error(`Error: ${message}`);

      // Display error notification
      toast.error(message, {
        position: "top-center",
        autoClose: false, // 10 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-red-500 rounded-lg",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-15">
      <ToastContainer />
      <form
        onSubmit={(e) => signIn(e)}
        className="[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] shrink-0 flex w-full overflow-y-hidden flex-col items-center justify-start gap-[1.5rem] text-center text-[1rem] text-black font-semibold-16-24"
      >
        {/* Email Input */}

        <div className="shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">
            Email Address
          </div>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg focus:outline-none box-border w-[25rem] h-[3rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-01 border-[1px] border-solid border-gray-03"
          />
        </div>

        {/* Password Input */}

        <div className="shrink-0 flex flex-col items-start justify-start gap-0.5">
          <div className="w-full flex items-center justify-between">
            <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
              Password
            </div>
            <Link
              href="/Auth/Reset"
              className="relative text-sm font-medium no-underline text-mediumblue text-right inline-block w-32 cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="..........."
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg focus:outline-none box-border w-[25rem] h-[3rem] text-justify text-bold flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-01 border-[1px] border-solid border-gray-03"
          />
        </div>

        {/* Checkbox */}

        <div className="relative w-full flex flex-col items-start justify-start gap-4 text-left text-base text-black font-semibold">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="relative w-4 h-4 rounded-sm">
              <input
                className="absolute cursor-pointer w-full h-full object-cover"
                type="checkbox"
                id="checkbox"
              />
            </div>
            <div className="relative leading-6 font-light w-60 text-[1rem] font-light-16-24 text-black text-left inline-block">
              Keep me signed in
            </div>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="relative rounded bg-mediumblue w-full h-[3rem] flex flex-row items-center justify-center py-[1rem] px-[0.75rem] box-border text-center text-[1rem] text-white font-semibold-16-24 cursor-pointer"
          >
            <div className="relative leading-6 font-semibold w-40">Login</div>
          </button>
        </div>

        {/* Or */}

        <div className="relative w-full flex flex-col items-center justify-start text-center text-[0.88rem] text-gray-01 font-regular-14-20">
          <div className="absolute my-0 mx-[!important] top-[1.11rem] left-[calc(50%_-_171.25px)] box-border w-[21.41rem] h-[0.03rem] opacity-[0.25] z-[0] border-t-[0.5px] border-solid border-gray-02"></div>
          <div className="bg-special-main-bg cursor-pointer shrink-0 flex flex-row items-start justify-start p-[0.5rem] z-[1]">
            <button className="relative leading-[1.25rem] bg-transparent inline-block w-[7rem] cursor-pointer shrink-0">
              or sign in with
            </button>
          </div>
        </div>

        {/* Social Media Buttons */}

        <button
          type="button"
          onClick={googleLogin}
          className="relative cursor-pointer rounded bg-gray-04 w-full h-[3rem] flex flex-row items-center justify-center py-[0.75rem] px-[4.31rem] box-border gap-[1rem] text-center text-[1rem] text-gray-02 font-regular-16-24"
        >
          {/* <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover" alt="" src="Google.png"> */}
          <Image
            height={24}
            width={24}
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            src="assets/Google.svg"
            alt="Google"
          />
          <div className="relative cursor-pointer leading-[1.5rem]">
            Continue with Google
          </div>
        </button>

        <Link
          className="relative no-underline text-[1rem] leading-[1.5rem] font-semibold cursor-pointer font-semibold-16-24 bg-transparent text-mediumblue text-center inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[25rem] h-[1.5rem]"
          href="/Auth/Signup"
        >
          Create an account
        </Link>
      </form>
    </main>
  );
};

export default Login;
