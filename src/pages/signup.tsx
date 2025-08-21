import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../supabase-client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be atleast 8 characters");
      setIsLoading(false);
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      if (signUpError.message.includes("User already registered")) {
        toast.error("An account with this email already exists. Please log in");
      } else {
        toast.error(signUpError.message);
      }
      setIsLoading(false);
      return;
    }
    toast.success("Account created successfully!");
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      toast.error(signInError.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  const signInWithGoogle = async () => {
    try {
      setIsRedirecting(true);
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
      if (error) {
        console.error("Google sign-in error:", error.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setIsRedirecting(false);
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center">
      <div className="bg-white py-10 px-4 rounded-xl flex flex-col gap-4 w-[91%] lg:w-[37.5%] md:w-[68%]">
        <div className="pb-2 flex items-center gap-[10px] justify-center">
          <img src="/Feather.png" alt="logo" className="w-7 h-7" />
          <h1 className="font-pacifico text-black font-normal text-[23px] tracking-[-2%]">notes</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px] text-center">Create Your Account</h1>
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">Sign up to start organizing your notes and boost your productivity.</p>
        </div>
        <form className="flex flex-col gap-4 pt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
              Email Address
            </label>
            <input
              value={email}
              type="text"
              placeholder="email@example.com"
              className={`py-3 px-4 outline-0 rounded-lg text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] placeholder-neutral-500 ${
                emailError ? "border border-red-500" : "border border-neutral-300 "
              }`}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && (
              <div className="flex items-center gap-2">
                <img src="/info circle error.png" alt="info icon" className="w-4 h-4" />
                <p className="font-inter font-normal text-xs text-red-500">{emailError}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="Password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
              Password
            </label>
            <div className={`flex items-center justify-between py-3 px-4  rounded-lg ${passwordError ? "border border-red-500" : "border border-neutral-300"}`}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                id="Password"
                className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              <img src={showPassword ? "/Hide.png" : "/Show.png"} alt="toggle password visibility" className="w-5 h-5 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)} />
            </div>
            {passwordError ? (
              <p className="font-inter font-normal text-xs text-red-500">{passwordError}</p>
            ) : (
              <div className="flex items-center gap-2">
                <img src="/info circle.png" alt="info icon" className="w-4 h-4" />
                <p className="font-inter font-normal text-xs text-neutral-600">At least 8 characters</p>
              </div>
            )}
          </div>
          <button className="py-3 px-4 bg-blue-500 rounded-lg text-white font-inter font-semibold text-base leading-[120%] tracking-[-0.3px] cursor-pointer" type="submit" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="pt-6 border-t border-neutral-300 flex flex-col gap-4">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">or log in with:</p>
          <button className="flex items-center gap-4 py-3 px-4 rounded-xl border border-neutral-300 justify-center cursor-pointer" onClick={signInWithGoogle} disabled={isRedirecting}>
            {isRedirecting ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                <p className="text-neutral-950 font-inter font-medium text-sm leading-[100%] tracking-[0.5px]">Please wait...</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <img src="/Google.png" alt="google icon" className="w-6 h-[25px]" />
                <p className="text-neutral-950 font-inter font-medium text-base leading-[100%] tracking-[0.5px]">Google</p>
              </div>
            )}
          </button>
        </div>
        <div className="flex items-center gap-1 justify-center pt-4 border-t border-neutral-300">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Already have an account?</p>
          <Link to="/">
            {" "}
            <button className="border-0 text-neutral-950 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] cursor-pointer">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
