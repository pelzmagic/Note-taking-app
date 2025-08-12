export default function Login() {
  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center">
      <div className="bg-white py-10 px-4 rounded-xl flex flex-col gap-4 w-[91%] lg:w-[37.5%] md:w-[68%]">
        <div className="pb-2 flex items-center gap-[10px] justify-center">
          <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
          <p className="font-pacifico text-black font-normal text-[23px] tracking-[-2%]">notes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-950 text-2xl leading-[120%] tracking-[-0.5px] font-bold text-center">Welcome to Note</h1>
          <p className="text-neutral-600 font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">Please log in to continue</p>
        </div>
        <form className="pt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-neutral-950 font-medium text-sm leading-[120%] tracking-[-0.2px] font-inter">
              Email Address
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              id="email"
              className="py-3 px-4 outline-0 w-full rounded-lg border border-neutral-300 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] placeholder-neutral-500"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
                Password
              </label>
              <button className="font-inter text-xs leading-[140%] font-normal border-b border-neutral-300 text-neutral-600">Forgot</button>
            </div>
            <div className="border border-neutral-300 rounded-lg py-3 px-4 flex items-center justify-between">
              <input type="text" id="password" className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
              <img src="/Show.png" alt="eye icon" className="w-5 h-5" />
            </div>
          </div>
          <button className="py-3 px-4 bg-blue-500 rounded-lg font-inter font-semibold text-base leading-[120%] tracking-[-0.3px] text-white">Login</button>
        </form>
        <div className="pt-6 flex flex-col gap-4">
          <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-center">Or log in with:</p>
          <div className="py-3 px-4 flex items-center gap-4 justify-center border border-neutral-300 rounded-xl">
            <img src="/Google.png" alt="google icon" className="w-6 h-[25px]" />
            <p className="text-neutral-950 font-inter font-medium text-base leading-[100%] tracking-[0.5px]">Google</p>
          </div>
        </div>
        <hr className="border border-neutral-200" />
        <div className="flex items-center justify-center gap-1">
          <p className="font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600">No account yet?</p>
          <button className="border-0 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-950">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
