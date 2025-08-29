export default function ChangePassword() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden relative bg-neutral-100">
      <div className="py-3 px-4 flex items-center gap-3">
        <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
        <p className="font-pacifico text-black text-[23px] tracking-[-2%] font-normal">notes</p>
      </div>
      <div className="py-3 px-4 border-t border-neutral-200 absolute bottom-0 w-full shadow shadow-neutral-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="py-1 w-[68.6px] hover:bg-blue-50 rounded-sm">
            <img src="/Home.png" alt="home icon" className="w-6 h-6 mx-auto" />
          </div>
          <div className="py-1 w-[68.6px] hover:bg-blue-50 rounded-sm">
            <img src="/Search.png" alt="search icon" className="w-6 h-6 mx-auto" />
          </div>
          <div className="py-1 w-[68.6px] hover:bg-blue-50 rounded-sm">
            <img src="/Archive.png" alt="archive icon" className="w-6 h-6 mx-auto" />
          </div>
          <div className="py-1 w-[68.6px] hover:bg-blue-50 rounded-sm">
            <img src="/Tag.png" alt="tag icon" className="w-6 h-6 mx-auto" />
          </div>
          <div className="py-1 w-[68.6px] hover:bg-blue-50 rounded-sm">
            <img src="/Setting.png" alt="setting icon" className="w-6 h-6 mx-auto" />
          </div>
        </div>
      </div>
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-3 rounded-t-lg bg-white">
        <div className="flex items-center gap-2">
          <img src="/arrow-left.png" alt="arrow icon" className="w-5 h-5" />
          <p className="text-neutral-600 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Settings</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">Change Password</h1>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="old Password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
                Old Password
              </label>
              <div className="py-3 px-4 flex items-center justify-between border border-neutral-200 rounded-lg">
                <input type="password" id="old Password" className="outline-0 text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
                <img src="/Show.png" alt="eye icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="New Password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
                New Password
              </label>
              <div className="py-3 px-4 flex items-center justify-between border border-neutral-200 rounded-lg">
                <input type="password" id="New Password" className="outline-0 text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
                <img src="/Show.png" alt="eye icon" className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/info circle.png" alt="warning icon" className="w-4 h-4" />
                <p className="text-neutral-600 font-inter font-normal text-xs leading-[140%]">Atleast 8 characters</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="Confirm Password" className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">
                Confirm New Password
              </label>
              <div className="py-3 px-4 flex items-center justify-between border border-neutral-200 rounded-lg">
                <input type="password" id="Confirm Password" className="outline-0 text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]" />
                <img src="/Show.png" alt="eye icon" className="w-5 h-5" />
              </div>
            </div>
          </form>
          <div className="flex justify-end">
            <button className="py-3 px-4 bg-blue-500 rounded-lg w-[38.42%] text-white font-inter text-sm font-medium leading-[120%] tracking-[-0.2px]">Save Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
