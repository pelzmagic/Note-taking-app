import { useState } from "react";
import { supabase } from "@/supabase-client";
import { Link } from "react-router-dom";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Typewriter } from "react-simple-typewriter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error("invalid log in details");
      setIsLoading(false);
      return;
    }

    window.location.href = "/reset-password";
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
          <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
          <p className="font-pacifico text-black font-normal text-[23px] tracking-[-2%]">notes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-950 text-2xl leading-[120%] tracking-[-0.5px] font-bold text-center font-inter">
            <Typewriter words={["Welcome to notes!"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </h1>
          <p className="text-neutral-600 font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">Please log in to continue</p>
        </div>
        <form className="pt-6 flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-neutral-950 font-medium text-sm leading-[120%] tracking-[-0.2px] font-inter">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email@example.com"
              id="email"
              className="py-3 px-4 outline-0 w-full rounded-lg border border-neutral-300 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] placeholder-neutral-500 hover:bg-neutral-50 hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
                Password
              </label>
              <button className="font-inter text-xs leading-[140%] font-normal border-b border-neutral-300 text-neutral-600 cursor-pointer hover:text-blue-500 hover:border-blue-500">Forgot</button>
            </div>
            <div className="border border-neutral-300 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]"
              />
              <img src={showPassword ? "/Hide.png" : "/Show.png"} alt="eye icon" className="w-5 h-5 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)} />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="py-3 px-4 bg-blue-500 rounded-lg font-inter font-semibold text-base leading-[120%] tracking-[-0.3px] text-white cursor-pointer">
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="pt-6 flex flex-col gap-4">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">Or log in with:</p>
          <button
            className="flex items-center gap-4 py-3 px-4 rounded-xl border border-neutral-300 justify-center cursor-pointer hover:bg-neutral-50"
            onClick={signInWithGoogle}
            disabled={isRedirecting}>
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
        <hr className="border border-neutral-200" />
        <div className="flex items-center justify-center gap-1">
          <p className="font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600">No account yet?</p>
          <Link to="/signup" className="border-0 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-950 cursor-pointer hover:text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
