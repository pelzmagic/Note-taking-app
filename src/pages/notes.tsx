export default function Notes() {
  return (
    <div>
      <div className="py-3 px-4 bg-neutral-100 flex items-center gap-3">
        <img src="/Feather.png" alt="logo icon" className="w-7 h-7" />
        <p className="font-pacifico text-black text-[23px] tracking-[-2%] font-normal">notes</p>
      </div>
      <div className="py-3 px-4 border-t border-neutral-200 absolute bottom-0 w-full">
        <div className="flex items-center justify-between">
          <img src="/Home.png" alt="home icon" className="w-6 h-6" />
          <img src="/Search.png" alt="search icon" className="w-6 h-6" />
          <img src="/Archive.png" alt="archive icon" className="w-6 h-6" />
          <img src="/Tag.png" alt="tag icon" className="w-6 h-6" />
          <img src="/Setting.png" alt="setting icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
