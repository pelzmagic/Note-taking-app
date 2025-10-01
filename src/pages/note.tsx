import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/supabase-client";
import Loader from "@/components/ui/loader";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Note = {
  title: string;
  created_at: string;
  tag: string;
  content: string;
  id: string;
};

export default function Note() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNote() {
      const { data, error } = await supabase.from("user-notes").select("*").eq("id", id).single();
      if (error) {
        console.log("Error fetching notes:", error.message);
      } else {
        setNote(data);
      }
    }
    if (id) fetchNote();
  }, [id]);

  if (!note) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />;
      </div>
    );
  }

  async function deleteNote(id: string) {
    const { error } = await supabase.from("user-notes").delete().eq("id", id);

    if (error) {
      console.error("Error deleting notes:", error.message);
    } else {
      toast.success("Note deleted successfully");
      navigate(-1);
    }
  }

  function openModal() {
    setShowModal(!showModal);
  }

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
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <Link to="/signup" className="flex items-center gap-1 cursor-pointer">
            <img src="/arrow-left.png" alt="arrow icon" className="w-[18px] h-[18px]" />
            <p className="font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600">Go Back</p>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={openModal}>
              <img src="/delete.png" alt="delete icon" className="w-[18px] h-[18px] cursor-pointer" />
            </button>
            <button>
              <img src="/archive-note.png" alt="archive icon" className="w-[18px] h-[18px] cursor-pointer" />{" "}
            </button>
            <button className="border-0 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-600 cursor-pointer">Cancel</button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-neutral-950 font-inter font-bold text-2xl leading-[120%] tracking-[-0.5px]">{note.title}</h1>
          <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-[33.53%] py-1 flex items-center gap-[6px]">
                <img src="/Tag.png" alt="tag icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Tags</p>
              </div>
              <p className="text-neutral-950 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">{note.tag}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[33.53%] py-1 flex items-center gap-[6px]">
                <img src="/Circle Clock.png" alt="clock icon" className="w-4 h-4" />
                <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]">Last edited</p>
              </div>
              <p className="text-neutral-700 font-inter font-normal text-xs leading-[120%] tracking-[-0.2px]"> {new Date(note.created_at).toLocaleString()}</p>
            </div>
          </div>
          <p className="text-neutral-800 font-inter text-sm leading-[120%] tracking-[-0.2px]">{note.content}</p>
        </div>
      </div>
      {showModal && (
        <div className="absolute inset-0 bg-neutral-950/50 flex items-center justify-center">
          <div className="w-[91.4%] bg-white border border-neutral-200 rounded-xl">
            <div className="p-5 flex items-start gap-4">
              <div className="bg-neutral-100 rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                <img src="/delete.png" alt="delete icon" className="w-6 h-[25px]" />
              </div>
              <div className="space-y-[6px]">
                <h1 className="text-neutral-950 font-inter font-semibold text-base leading-[120%] tracking-[-0.3px]">Delete Note</h1>
                <p className="text-neutral-700 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">Are you sure you want to permanently delete this note? This action cannot be undone.</p>
              </div>
            </div>
            <div className="py-4 px-5 border-t border-neutral-200 flex items-center gap-4 justify-end">
              <button className="py-3 px-4 rounded-lg bg-neutral-100 text-neutral-600 font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]" onClick={openModal}>
                Cancel
              </button>
              <button
                className="py-3 px-4 rounded-lg bg-red-500 text-white font-inter font-medium text-sm leading-[120%] tracking-[-0.2px]"
                onClick={() => {
                  if (id) deleteNote(id);
                }}>
                Delete Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
