export default function Footer() {
  return (
    <footer className="bg-wood-dark text-white py-10 border-t-4 border-hiroshima-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-hiroshima-red font-bold text-sm mb-1 uppercase tracking-widest">歷史地位</span>
            <span className="text-wood-warm text-xs">日本平城建築典範</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-hiroshima-red font-bold text-sm mb-1 uppercase tracking-widest">結構工法</span>
            <span className="text-wood-warm text-xs">大木作榫接系統</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-hiroshima-red font-bold text-sm mb-1 uppercase tracking-widest">模型對象</span>
            <span className="text-wood-warm text-xs">廣島城東小天守</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-hiroshima-red font-bold text-sm mb-1 uppercase tracking-widest">教學重點</span>
            <span className="text-wood-warm text-xs">無插銷榫接邏輯</span>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-sidebar-line text-center text-[10px] text-wood-warm/30 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} 廣島城建築研究小組 | 專業學術存檔
        </div>
      </div>
    </footer>
  );
}

