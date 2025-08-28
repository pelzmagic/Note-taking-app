export default function SearchNote() {
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
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center absolute right-4 bottom-20">
        <img src="/Plus.png" alt="plus icon" className="w-8 h-8" />
      </div>
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-4 rounded-t-lg bg-white">
        <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">Search</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-[6px] bg-neutral-50 px-2 py-2 rounded-md">
            <img src="/Search.png" alt="search icon" className="w-5 h-5" />
            <input type="text" placeholder="Dev" className="outline-0 w-full text-neutral-950 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] placeholder-neutral-950" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-neutral-700 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">
              All notes matching <span className="text-neutral-950">"Dev"</span> are displayed below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
