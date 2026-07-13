"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ribbon } from "./Ribbon";
import { menuData } from "@/lib/menu-data";
import { iconMap } from "./MenuIcons";

export function Carta() {
  const [active, setActive] = useState(menuData[0].id);
  const activeCategory = menuData.find((c) => c.id === active)!;
  const ActiveIcon = iconMap[activeCategory.icon];

  return (
    <section id="carta" className="relative py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <Ribbon size="lg">La Carta</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-cuero-dark">
            Todo lo que cocinamos, con el mismo cariño de siempre
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-12 mb-4 flex flex-wrap justify-center gap-2 md:gap-3">
          {menuData.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`group flex items-center gap-2 px-4 py-2.5 font-display text-xs md:text-sm uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-cuero-dark text-paper border-cuero-dark shadow-md"
                    : "bg-paper/60 text-ink/70 border-ink/15 hover:border-cuero-dark hover:text-cuero-dark"
                }`}
              >
                <Icon
                  className={`w-4 h-4 md:w-5 md:h-5 ${
                    isActive ? "text-paper" : "text-cuero-dark"
                  }`}
                />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 carved-box bg-paper/70 p-6 md:p-12 relative"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <ActiveIcon className="w-10 h-10 text-rust shrink-0" />
              <h3 className="font-display uppercase tracking-widest text-2xl md:text-3xl text-cuero-darker">
                {activeCategory.title}
              </h3>
            </div>
            {activeCategory.note && (
              <p className="text-center text-xs uppercase tracking-widest text-ink/50 -mt-6 mb-8">
                {activeCategory.note}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-baseline justify-between gap-3 py-3 border-b border-dashed border-ink/15 group"
                >
                  <div className="min-w-0">
                    <span className="font-display text-[0.95rem] md:text-base uppercase tracking-wide text-ink group-hover:text-rust transition-colors">
                      {item.name}
                    </span>
                    {item.desc && (
                      <p className="text-xs md:text-[0.8rem] text-ink/55 italic leading-snug mt-0.5 font-body">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 flex items-baseline gap-1 font-display text-sm md:text-base text-cuero-dark whitespace-nowrap">
                    {item.price}
                    {item.priceGrande && (
                      <span className="text-rust"> / {item.priceGrande}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
