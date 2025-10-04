import type { NoteType } from "@/types";

type ArchivedNoteProps = {
  notes: NoteType[];
};

export default function ArchivedNote({ notes }: ArchivedNoteProps) {
  const archivedNote = notes.filter((note) => note.archived);

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
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center absolute right-4 bottom-20">
        <img src="/Plus.png" alt="plus icon" className="w-8 h-8" />
      </div>
      <div className="py-5 px-4 flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-2 rounded-t-lg bg-white border border-red-500">
        <h1 className="text-neutral-950 font-inter text-2xl leading-[120%] tracking-[-0.5px] font-bold">Archived Notes</h1>
        <div className="flex flex-col gap-4">
          <p className="text-neutral-700 font-inter font-normal text-sm leading-[120%] tracking-[-0.2px]">All your archived notes are stored here. You can restore or delete them anytime.</p>
        </div>
        {archivedNote.length > 1 ? <div className="flex flex-col gap-1 p-2"></div> : <p>How are you?</p>}
      </div>
    </div>
  );
}
