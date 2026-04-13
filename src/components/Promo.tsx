import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        7 реализованных проектов
      </h3>

      <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-center px-6">
        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          152,5 МВт
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl opacity-80 max-w-xl">
          Суммарная мощность введённых энергоцентров на Салмановском и Южно-Тамбейском месторождениях
        </p>
      </div>

      <div id="projects" className="absolute bottom-12 left-6 right-6 z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Салмановское НГКМ", count: "3 энергоцентра", mw: "75 МВт" },
          { name: "Южно-Тамбейское", count: "4 энергоцентра", mw: "77,5 МВт" },
          { name: "Опыт работы", count: "10+ лет", mw: "ЯНАО" },
          { name: "Собственный парк", count: "ДГУ и ГПУ", mw: "техника" },
        ].map((item, i) => (
          <div key={i} className="border border-white/30 p-3 backdrop-blur-sm">
            <p className="text-white/60 text-xs uppercase tracking-wide mb-1">{item.name}</p>
            <p className="text-white font-bold text-lg">{item.mw}</p>
            <p className="text-white/80 text-xs">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}