export default function Settings() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden relative bg-neutral-100">
      <div className="py-3 px-4 flex items-center gap-3">
        <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
        <p className="font-pacifico text-black text-[23px] tracking-[-2%] font-normal">notes</p>
      </div>
      <div className="py-3 px-4 border-t border-neutral-200 absolute bottom-0 w-full shadow shadow-neutral-200 bg-white">
        <div className="flex items-center">
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
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-4 rounded-t-lg bg-white">
        <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">Settings</h1>
        <div className="flex flex-col gap-2">
          <div className="py-2 flex items-center gap-2">
            <img src="/Sun.png" alt="sun icon" className="w-5 h-5" />
            <p className="text-neutral-950 font-inter text-sm leading-[120%] tracking-[-0.2px] font-medium">Color Theme</p>
          </div>
          <div className="py-2 flex items-center gap-2">
            <img src="/Type.png" alt="type icon" className="w-5 h-5" />
            <p className="text-neutral-950 font-inter text-sm leading-[120%] tracking-[-0.2px] font-medium">Font Theme</p>
          </div>
          <div className="py-2 flex items-center gap-2 pb-2 border-b border-neutral-200">
            <img src="/padlock.png" alt="type icon" className="w-5 h-5" />
            <p className="text-neutral-950 font-inter text-sm leading-[120%] tracking-[-0.2px] font-medium">Change Password</p>
          </div>
          <div className="py-2 flex items-center gap-2">
            <img src="/Logout.png" alt="type icon" className="w-5 h-5" />
            <p className="text-neutral-950 font-inter text-sm leading-[120%] tracking-[-0.2px] font-medium">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
