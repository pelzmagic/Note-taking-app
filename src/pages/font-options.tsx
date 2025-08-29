import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FontOptions() {
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
          <div className="flex flex-col gap-2">
            <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">Font Theme</h1>
            <p className="text-neutral-700 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Choose your font theme.</p>
          </div>
          <div className="flex flex-col gap-4">
            <RadioGroup defaultValue="one">
              <div className="flex items-center gap-4 py-4 px-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/sans-serif.png" alt="theme icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Sans-serif</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Clean and modern, easy to read.</p>
                </div>
                <RadioGroupItem value="one" />
              </div>
              <div className="flex items-center gap-4 py-4 px-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/serif.png" alt="theme icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Serif</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Classic and elegant for a timeless feel.</p>
                </div>
                <RadioGroupItem value="two" />
              </div>
              <div className="flex items-center gap-4 py-4 px-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100">
                <img src="/monospace.png" alt="theme icon" className="w-10 h-10" />
                <div className="flex flex-col gap-[6px] w-[65%]">
                  <p className="text-neutral-950 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]">Monospace</p>
                  <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Code-like, great for a technical vibe.</p>
                </div>
                <RadioGroupItem value="three" />
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-end">
            <button className="py-3 px-4 bg-blue-500 rounded-lg w-[38.42%] text-white font-inter text-sm font-medium leading-[120%] tracking-[-0.2px]">Apply Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
