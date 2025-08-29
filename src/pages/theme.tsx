import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Theme() {
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
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-3 rounded-t-lg bg-white">
        <div className="flex items-center gap-2">
          <img src="/arrow-left.png" alt="arrow icon" className="w-5 h-5" />
          <p className="text-neutral-600 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Settings</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">Color Theme</h1>
            <p className="text-neutral-700 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Choose your color theme.</p>
          </div>
          <div className="flex flex-col gap-4">
            <RadioGroup defaultValue="one">
              <div className="px-4 py-4 flex items-center gap-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/sun icon.png" alt="sun icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Light Mode</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Pick a clean and classy light theme</p>
                </div>
                <RadioGroupItem value="one" />
              </div>
              <div className="px-4 py-4 flex items-center gap-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/dark-mode.png" alt="sun icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Dark Mode</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Select a sleek and modern dark theme</p>
                </div>
                <RadioGroupItem value="two" />
              </div>
              <div className="px-4 py-4 flex items-center gap-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/system.png" alt="sun icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">System</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Adapts to your device's theme</p>
                </div>
                <RadioGroupItem value="three" />
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
