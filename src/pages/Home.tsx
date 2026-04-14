import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-wood-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://picsum.photos/seed/hiroshima-castle/1920/1080"
            alt="Hiroshima Castle"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-dark via-wood-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-hiroshima-red text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              日本百大名城
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-wood-light leading-tight mb-6">
              廣島城 <br />
              <span className="text-wood-warm italic">天守閣</span>
            </h1>
            <p className="text-xl text-wood-light/80 font-light leading-relaxed mb-10">
              廣島城又稱「鯉城」，是日本安土桃山時代的代表性建築。
              透過精湛的大木作技術，展現了武家文化的堅毅與優雅。
            </p>
            <div className="flex space-x-4">
              <Link
                to="/architecture"
                className="px-8 py-4 bg-hiroshima-red text-white font-medium rounded-sm hover:bg-hiroshima-red/90 transition-all flex items-center group"
              >
                探索建築
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/joinery"
                className="px-8 py-4 border border-wood-light/30 text-white font-medium rounded-sm hover:bg-white/10 transition-all"
              >
                榫接工藝
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-wood-light wood-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square border-4 border-wood-dark shadow-[8px_8px_0px_rgba(160,48,48,0.2)]"
            >
              <img
                src="https://picsum.photos/seed/castle-detail/800/800"
                alt="Castle Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-wood-dark/90 text-white">
                <p className="font-serif text-lg italic">「鯉城」之美，在於其獨特的望樓型構造與精密的木構對稱。」</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="flex justify-between items-end border-b-2 border-wood-dark pb-4">
                <h2 className="text-4xl font-serif font-bold text-wood-dark">
                  廣島天守閣的重要性
                </h2>
                <div className="status-badge">學術專題</div>
              </div>
              
              <div className="info-panel">
                <h3>歷史地位</h3>
                <p className="mt-4 leading-relaxed">
                  廣島城又稱「鯉城」，是日本少見的「平城」。其天守閣在1945年毀於原子彈爆炸，目前的東小天守是依據古法精確復原的模型。其結構特點在於大木作系統與嚴密的防禦機制，是研究桃山時代至江戶時代過渡期建築的重要樣本。
                </p>
              </div>

              <div className="info-panel">
                <h3>東小天守模型特點</h3>
                <p className="mt-4 leading-relaxed">
                  此模型展示了東小天守獨有的連結廊道與主天守的錯落關係。重點呈現了傳統「榫接」如何支撐高層木構建築，特別是在不使用金屬釘件的情況下，達成強大的抗震與抗風能力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Joinery Preview */}
      <section className="py-24 bg-wood-dark text-wood-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl font-serif font-bold mb-8">精湛的榫接工藝</h2>
          <p className="max-w-2xl mx-auto text-lg text-wood-light/70 mb-12">
            日本傳統建築的靈魂在於「榫接」（Kigumi）。不依賴鐵釘，僅憑木材間的咬合，
            創造出足以支撐數百年風霜的強大構造。
          </p>
          <Link
            to="/joinery"
            className="inline-flex items-center px-10 py-5 bg-wood-warm text-wood-dark font-bold rounded-sm hover:bg-white transition-all"
          >
            查看榫接動畫
          </Link>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-hiroshima-red/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-warm/5 rounded-full blur-3xl -ml-48 -mb-48" />
      </section>
    </div>
  );
}
