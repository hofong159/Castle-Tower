import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Info, Play, RotateCcw } from 'lucide-react';

interface JoineryType {
  id: string;
  name: string;
  description: string;
  details: string[];
  color: string;
}

const joineryData: JoineryType[] = [
  {
    id: 'ari-tsugi',
    name: '鳩尾榫 (蟻繼 Ari-tsugi)',
    description: '日本大木作最基礎的接合方式，因榫頭形如蟻頭（鳩尾）而得名。',
    details: [
      '幾何鎖定：利用梯形構造產生抗拉力，不需鐵釘即可防止木材縱向脫離。',
      '廣島城應用：常用於外圍走廊（迴緣）的橫樑接合。',
      '工藝重點：梯形的角度必須精確，過大易斷，過小則鎖定力不足。'
    ],
    color: 'fill-hiroshima-red'
  },
  {
    id: 'tooshi-hozo',
    name: '通榫 (通し目地 Tooshi-hozo)',
    description: '榫頭貫穿柱身的強力接合，是支撐天守閣高層建築的核心。',
    details: [
      '結構強度：榫頭完全穿透柱子，提供極佳的抗剪力與剛性。',
      '東小天守應用：主要支柱與二樓橫樑的交接處。',
      '工藝重點：榫孔與榫頭的配合需達到「微米級」的緊密。'
    ],
    color: 'fill-wood-dark'
  },
  {
    id: 'watari-ago',
    name: '搭接 / 十字搭接 (Watari-ago + Juji-shiguchi)',
    description: '兩種搭接概念合併展示：同平面削切搭接與十字交會搭接。',
    details: [
      '受力均勻：透過半厚削切，將重量均勻傳導至交會構件。',
      '東小天守應用：屋頂桁架與格柵框架的交錯位置。',
      '工藝重點：交會處切削深度必須一致，才能維持同平面咬合。'
    ],
    color: 'fill-stone-600'
  }
];

export default function Joinery() {
  const [selected, setSelected] = useState<JoineryType>(joineryData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // SVG Joinery Shapes based on type
  const renderJoinerySVG = () => {
    switch (selected.id) {
      case 'ari-tsugi':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Female Part */}
            <path d="M40,120 L160,120 L160,180 L40,180 Z" className="fill-stone-200" />
            <path d="M80,120 L120,120 L130,100 L70,100 Z" className="fill-stone-300" />
            {/* Male Part */}
            <motion.g
              animate={isPlaying ? { y: 0 } : { y: -60 }}
              transition={{ duration: 1.5, ease: "anticipate" }}
            >
              <path d="M70,100 L130,100 L120,80 L80,80 Z" className={selected.color} />
              <path d="M40,20 L160,20 L160,80 L40,80 Z" className={selected.color} />
            </motion.g>
          </svg>
        );
      case 'tooshi-hozo':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Column with Hole */}
            <rect x="70" y="40" width="60" height="140" className="fill-stone-200" />
            <rect x="90" y="90" width="20" height="40" className="fill-stone-300" />
            {/* Tenon Beam */}
            <motion.g
              animate={isPlaying ? { x: 0 } : { x: -100 }}
              transition={{ duration: 1.5, ease: "anticipate" }}
            >
              <rect x="20" y="90" width="70" height="40" className={selected.color} />
              <rect x="90" y="95" width="40" height="30" className={selected.color} />
            </motion.g>
          </svg>
        );
      case 'watari-ago':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Bottom Beam with Cross-lap Notch */}
            <path d="M40,90 L160,90 L160,110 L110,110 L110,130 L90,130 L90,110 L40,110 Z" className="fill-stone-200" />
            {/* Top Beam with Matching Notch */}
            <motion.g
              animate={isPlaying ? { y: 0 } : { y: -80 }}
              transition={{ duration: 1.5, ease: "anticipate" }}
            >
              <rect x="90" y="40" width="20" height="70" className={selected.color} />
              <rect x="70" y="90" width="60" height="20" className={selected.color} />
            </motion.g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-wood-light min-h-screen pb-24">
      <header className="bg-wood-dark py-16 text-center">
        <h1 className="text-5xl font-serif font-bold text-wood-light mb-4">大木作榫接工藝</h1>
        <p className="text-wood-warm text-lg">The Art of Japanese Joinery (Kigumi)</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center border-b-2 border-wood-dark pb-2 mb-6">
              <h3 className="font-serif text-xl font-bold text-wood-dark flex items-center">
                <Info className="mr-2 text-hiroshima-red" size={20} />
                榫接分類
              </h3>
            </div>
            {joineryData.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelected(item);
                  setIsPlaying(false);
                }}
                className={cn(
                  "w-full text-left px-6 py-4 transition-all border-l-4",
                  selected.id === item.id
                    ? "bg-hiroshima-red text-white border-wood-dark shadow-[4px_4px_0px_rgba(61,43,31,0.2)] font-bold"
                    : "bg-wood-warm/30 border-transparent text-wood-dark/60 hover:bg-wood-warm/50"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Animation & Detail Area */}
          <div className="lg:col-span-9">
            <div className="info-panel !p-0 overflow-hidden">
              {/* Animation Stage */}
              <div className="h-[500px] bg-wood-light relative flex items-center justify-center overflow-hidden wood-texture border-b border-panel-border">
                <div className="absolute top-6 left-6 z-10">
                  <h2 className="text-3xl font-serif font-bold text-wood-dark">{selected.name}</h2>
                  <p className="text-wood-dark/50 italic">{selected.description}</p>
                </div>

                <div className="absolute bottom-6 right-6 flex space-x-4 z-10">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-4 bg-wood-dark text-white rounded-full shadow-[4px_4px_0px_rgba(160,48,48,0.4)] hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <RotateCcw size={24} /> : <Play size={24} />}
                  </button>
                </div>

                {/* Joinery Animation Stage */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="w-full h-full"
                    >
                      {renderJoinerySVG()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-xl font-bold mb-4 text-wood-dark border-b-2 border-hiroshima-red pb-2">技術詳解</h4>
                  <ul className="space-y-4">
                    {selected.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-hiroshima-red rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-wood-dark/80 leading-relaxed text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-wood-warm/30 p-8 border border-card-border shadow-[4px_4px_0px_rgba(61,43,31,0.05)]">
                  <h4 className="font-serif text-xl font-bold mb-4 text-wood-dark">在廣島城的應用</h4>
                  <p className="text-wood-dark/70 text-sm leading-relaxed italic">
                    「廣島城天守閣的結構穩固性，很大程度歸功於這些精密的榫接。
                    在東小天守的重建研究中，我們發現這些接合點不僅提供了結構支撐，
                    更在地震發生時提供了必要的彈性空間，這正是日本大木作的智慧結晶。」
                  </p>
                  <div className="mt-6 pt-4 border-t border-wood-dark/10 text-xs font-bold uppercase tracking-widest text-hiroshima-red">
                    重點展示：無插銷榫接邏輯
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

