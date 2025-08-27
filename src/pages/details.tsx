import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/supabase-client";

export default function Details() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSave() {
    const { data, error } = await supabase.from("user-notes").insert([{ title, content, user_id }]);
    if (error) {
      console.error(error);
    }
  }

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
        <div className="flex flex-col gap-3">
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} className="resize-none text-neutral-950 outline-0 text-2xl leading-[120%] tracking-[-0.5px] font-inter font-bold" />
          <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-[33.53%] py-1 flex items-center gap-[6px]">
                <img src="/Tag.png" alt="tag icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Tags</p>
              </div>
              <input type="text" className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px] outline-0 w-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[33.53%] py-1 flex items-center gap-[6px]">
                <img src="/Circle Clock.png" alt="clock icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Last edited</p>
              </div>
              <p className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">29 Oct 2024</p>
            </div>
          </div>
          <textarea className="pt-3 h-[300px] overflow-y-auto scrollbar-hidden resize-none text-neutral-800 font-inter font-normal text-sm leading-[120%] tracking-[-0.2%] outline-0" />
        </div>
      </div>
    </div>
  );
}
