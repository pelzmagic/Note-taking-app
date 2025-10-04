import { Link } from "react-router-dom";
import { supabase } from "@/supabase-client";
import { useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import type { NoteType } from "@/types";

type NotesProps = {
  session: Session | null;
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

export default function Notes({ notes, setNotes }: NotesProps) {
  useEffect(() => {
    async function fetchNotes() {
      const { data, error } = await supabase.from("user-notes").select("*").eq("archived", false).order("created_at", { ascending: false });
      if (error) console.error(error);
      else setNotes(data);
    }

    fetchNotes();
  }, [setNotes]);

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
      <Link to="/details">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center absolute right-4 bottom-20">
          <img src="/Plus.png" alt="plus icon" className="w-8 h-8" />
        </div>
      </Link>
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-4 rounded-t-lg bg-white">
        <h1 className="font-inter font-2xl font-bold leading-[120%] tracking-[-0.5px] text-neutral-950">All Notes</h1>
        {notes.length > 1 ? (
          <div className="flex flex-col gap-[9px]">
            {notes.map((note: NoteType) => (
              <Link to={`/note/${note.id}`} key={note.id}>
                <div className="p-2 flex flex-col gap-3 border-b border-neutral-200" key={note.id}>
                  <h1 className="text-neutral-950 text-base leading-[120%] tracking-[-0.3px] font-inter font-bold">{note.title}</h1>
                  <div className="flex items-center gap-1 flex-wrap">
                    {note.tag?.split(",").map((t: string, index: number) => (
                      <div className="px-[6px] py-[2px] bg-neutral-200 rounded-sm" key={index}>
                        <p className="text-neutral-950 text-xs leading-[120%] tracking-[-0.2px] font-inter font-normal">{t.trim()}</p>
                      </div>
                    ))}
                  </div>
                  <p className="font-inter font-normal text-xs leading-[120%] tracking-[-0.2px] text-neutral-700">
                    {new Date(note.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-2 bg-neutral-100 rounded-lg border border-neutral-200">
            <p className="text-sm leading-[120%] tracking-[-0.2px] fontn-inter font-normal text-neutral-950">You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>
          </div>
        )}
      </div>
    </div>
  );
}
