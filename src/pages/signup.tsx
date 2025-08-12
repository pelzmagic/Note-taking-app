export default function SignUp() {
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
        <form className="flex flex-col gap-4 pt-6">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
              Email Address
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              className="py-3 px-4 outline-0 border border-neutral-300 rounded-lg text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] placeholder-neutral-500"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="Password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
              Password
            </label>
            <div className="flex items-center justify-between py-3 px-4 border border-neutral-300 rounded-lg">
              <input type="text" id="Password" className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
              <img src="/Show.png" alt="show icon" className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/info circle.png" alt="info icon" className="w-4 h-4" />
              <p className="font-inter font-normal text-xs text-neutral-600">At least 8 characters</p>
            </div>
          </div>
          <button className="py-3 px-4 bg-blue-500 rounded-lg text-white font-inter font-semibold text-base leading-[120%] tracking-[-0.3px]">Sign Up</button>
        </form>
        <div className="pt-6 border-t border-neutral-300 flex flex-col gap-4">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">or log in with:</p>
          <div className="flex items-center gap-4 py-3 px-4 rounded-xl border border-neutral-300 justify-center">
            <img src="/Google.png" alt="google icon" className="w-6 h-[25px]" />
            <p className="text-neutral-950 font-inter font-medium text-base leading-[100%] tracking-[0.5px]">Google</p>
          </div>
        </div>
        <div className="flex items-center gap-1 justify-center pt-4 border-t border-neutral-300">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Already have an account?</p>
          <button className="border-0 text-neutral-950 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Login</button>
        </div>
      </div>
    </div>
  );
}
