import { motion } from 'motion/react';

export default function Architecture() {
  return (
    <div className="bg-wood-light min-h-screen pb-24">
      <header className="bg-wood-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/blueprint/1920/600"
            alt="Blueprint"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-serif font-bold text-wood-light mb-4">建築特色與東小天守</h1>
          <p className="text-wood-warm text-lg tracking-widest uppercase">Structural Analysis & Higashi-Kotenshu</p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section className="info-panel">
              <div className="flex justify-between items-center border-b border-wood-dark/10 pb-4 mb-6">
                <h2 className="text-3xl font-serif font-bold text-wood-dark">
                  東小天守：模型研究核心
                </h2>
                <div className="status-badge">模型分析</div>
              </div>
              <div className="prose prose-lg text-wood-dark/80 max-w-none">
                <p>
                  廣島城的構造屬於「連結式天守」，由大天守、東小天守、南小天守組成。
                  我們的模型研究重點在於<span className="font-bold text-hiroshima-red">東小天守</span>。
                </p>
                <p>
                  東小天守雖然規模較主天守小，但其結構設計同樣嚴謹。它不僅是防禦體系的一部分，
                  更是整體建築美學的平衡點。在模型製作過程中，我們特別關注其大木作的比例與榫接位置。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-wood-warm/20 p-6 border border-card-border">
                  <h3 className="font-serif text-xl font-bold mb-4 text-hiroshima-red">層級構造</h3>
                  <p className="text-sm leading-relaxed">
                    東小天守通常為二層三階構造，底層與走廊相連，形成流暢的兵力移動路徑。
                  </p>
                </div>
                <div className="bg-wood-warm/20 p-6 border border-card-border">
                  <h3 className="font-serif text-xl font-bold mb-4 text-hiroshima-red">屋根樣式</h3>
                  <p className="text-sm leading-relaxed">
                    採用入母屋造（歇山頂）風格，屋簷曲線優美，展現了典型的桃山時代風格。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-wood-dark text-white p-12 border-l-8 border-hiroshima-red shadow-xl">
              <h2 className="text-3xl font-serif font-bold mb-6 text-hiroshima-red">天守閣的差異性</h2>
              <div className="space-y-6">
                <p className="text-lg opacity-90">
                  與其他名城（如姬路城或松本城）相比，廣島城的特色在於其「外壁裝飾」。
                </p>
                <ul className="space-y-4 opacity-80">
                  <li className="flex items-start"><span className="text-hiroshima-red font-bold mr-2">●</span><span><span className="font-bold text-hiroshima-red">下見板張：</span> 廣島城天守閣外牆大量使用黑色的木板（下見板），這與姬路城的白漆大壁形成鮮明對比，更顯武士的肅穆感。</span></li>
                  <li className="flex items-start"><span className="text-hiroshima-red font-bold mr-2">●</span><span><span className="font-bold text-hiroshima-red">望樓型特徵：</span> 頂層設有迴廊（高欄），最初是為了瞭望與指揮，後來演變為權力的象徵。</span></li>
                  <li className="flex items-start"><span className="text-hiroshima-red font-bold mr-2">●</span><span><span className="font-bold text-hiroshima-red">無石落設計：</span> 早期構造中較少見到發達的「石落」（投石窗），反映了其建築年代較早的防禦思維。</span></li>
                </ul>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="info-panel">
              <h3 className="mb-6">建築規格</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-wood-warm pb-2">
                  <dt className="text-wood-dark/60 italic">構造類型</dt>
                  <dd className="font-bold">連結式望樓型</dd>
                </div>
                <div className="flex justify-between border-b border-wood-warm pb-2">
                  <dt className="text-wood-dark/60 italic">主要材質</dt>
                  <dd className="font-bold">檜木、杉木</dd>
                </div>
                <div className="flex justify-between border-b border-wood-warm pb-2">
                  <dt className="text-wood-dark/60 italic">外牆風格</dt>
                  <dd className="font-bold">下見板張</dd>
                </div>
                <div className="flex justify-between border-b border-wood-warm pb-2">
                  <dt className="text-wood-dark/60 italic">重建年份</dt>
                  <dd className="font-bold">1958年 (鋼筋混凝土)</dd>
                </div>
              </dl>
            </div>


            <div className="relative rounded-sm overflow-hidden group">
              <img
                src="https://picsum.photos/seed/wood-detail/400/600"
                alt="Wood Detail"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-hiroshima-red/20 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase tracking-widest">大木作細節</p>
                <p className="text-lg font-serif">木材的紋理與力量</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
