import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, caption: "Gand mo ditoo Loveey ko " },
  { src: gallery2, caption: "Cutee Loveey ko hehe" },
  { src: gallery3, caption: "Ikaw yung barbie ng buhay ko 🌸" },
  { src: gallery4, caption: "Wahh Ganda mo Talaga hehe" },
  { src: gallery5, caption: "Hug mo muna yung stop toys habang wala ako" },
];

const MemoryGallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="py-24 px-6 gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl sm:text-6xl font-cursive text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Your my Love of life
        </motion.h2>
        <div className="relative overflow-hidden rounded-2xl box-glow">
          <div className="aspect-[4/3] relative bg-card">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].caption}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
              <p className="text-primary-foreground font-body text-lg italic text-center">
                {images[current].caption}
              </p>
            </div>
          </div>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-accent"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
