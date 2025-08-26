import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden relative">
      <div className="py-3 px-4 bg-neutral-100 flex items-center gap-3">
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
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-3 rounded-t-md">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <Link to="/signup">
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="/arrow-left.png" alt="arrow icon" className="w-[18px] h-[18px]" />
              <p className="font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600">Go Back</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button>
              <img src="/delete.png" alt="delete icon" className="w-[18px] h-[18px] cursor-pointer" />
            </button>
            <button>
              <img src="/archive-note.png" alt="archive icon" className="w-[18px] h-[18px] cursor-pointer" />{" "}
            </button>
            <button className="border-0 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600 cursor-pointer">Cancel</button>
            <button className="border-0 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-blue-500 cursor-pointer">Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
