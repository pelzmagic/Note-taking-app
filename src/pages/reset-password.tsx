export default function ResetPassword() {
  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center">
      <div className="bg-white py-10 px-4 rounded-xl flex flex-col gap-4 w-[91%] lg:w-[37.5%] md:w-[68%]">
        <div className="pb-2 flex items-center gap-[10px] justify-center">
          <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
          <p className="font-pacifico text-black font-normal text-[23px] tracking-[-2%]">notes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px] text-center">Reset Your Password</h1>
          <p className="text-neutral-600 text-sm leading-[120%] tracking-[-0.2px] text-center">Choose a new password to secure your account.</p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="new password" className="text-neutral-950 text-sm font-inter font-medium leading-[120%] tracking-[-0.2px]">
              New Password
            </label>
            <div className="py-3 px-4 flex items-center justify-between border border-neutral-300 rounded-lg">
              <input type="text" id="new password" className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
              <img src="/Show.png" alt="show icon" className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/info circle.png" alt="info circle icon" className="w-4 h-4" />
              <p className="font-inter font-normal text-xs leading-[140%] text-neutral-600">At least 8 characters</p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="confirm new password" className="text-neutral-950 text-sm font-inter font-medium leading-[120%] tracking-[-0.2px]">
              Confirm New Password
            </label>
            <div className="py-3 px-4 flex items-center justify-between border border-neutral-300 rounded-lg">
              <input type="text" id="confirm new password" className="w-[90%] outline-0 text-neutral-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
              <img src="/Show.png" alt="show icon" className="w-5 h-5" />
            </div>
          </div>
          <button className="py-3 px-4 bg-blue-500 rounded-lg font-inter font-semibold text-base leading-[120%] tracking-[-0.3px] text-white">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
