export default function ArchivedDetails() {
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
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-1">
            <img src="/arrow-left.png" alt="arrow left icon" className="w-[18px] h-[18px]" />
            <p className="text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Go Back</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/delete.png" alt="delete icon" className="w-[18px] h-[18px] cursor-pointer" />
            <img src="/archive-note.png" alt="archive icon" className="w-[18px] h-[18px] cursor-pointer" />
            <button className="border-0 text-neutral-600 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] cursor-pointer">Cancel</button>
            <button className="border-0 text-blue-500 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] cursor-pointer">Save Note</button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">TypeScript Mitigation Guide</h1>
          <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2 pb-1">
              <div className="w-[33.53%] flex items-center gap-[6px]">
                <img src="/Tag.png" alt="tag icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Tags</p>
              </div>
              <div className="w-full">
                <p className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]"></p>
              </div>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <div className="w-[33.53%] flex items-center gap-[6px]">
                <img src="/Loading.png" alt="loading icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Status</p>
              </div>
              <div className="w-full">
                <p className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]"></p>
              </div>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <div className="w-[33.53%] flex items-center gap-[6px]">
                <img src="/Circle Clock.png" alt="clock icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Last edited</p>
              </div>
              <div className="w-full">
                <p className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
