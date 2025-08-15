import { useState } from "react";

export default function ForgottenPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center">
      <div className="bg-white py-10 px-4 rounded-xl flex flex-col gap-4 w-[91%] lg:w-[37.5%] md:w-[68%]">
        <div className="flex items-center pb-2 gap-[10px] justify-center">
          <img src="/Feather.png" alt="feather icon" className="w-7 h-7" />
          <p className="font-pacifico font-normal text-[23px] tracking-[-2%] text-black">notes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px] text-neutral-950 text-center">Forgotten your password?</h1>
          <p className="font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600 text-center">Enter your email below, and we will send you a link to reset it.</p>
        </div>
        <form className="flex flex-col pt-6 gap-4">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email@example.com"
              id="email"
              className="outline-0 py-3 px-4 rounded-lg border border-neutral-300 placeholder-neutral-500 text-neutral-500 font-inter text-sm leading-[120%] tracking-[-0.2px]"
            />
          </div>
          <button className="py-3 px-4 bg-blue-500 text-base font-inter font-semibold leading-[120%] tracking-[-0.3px] text-white rounded-lg">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
