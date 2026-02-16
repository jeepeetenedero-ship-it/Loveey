import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, X } from "lucide-react";

const SurpriseButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#e11d48", "#f472b6", "#fda4af", "#fecdd3", "#fff1f2"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="py-24 px-6 gradient-romantic">
      <div className="max-w-2xl mx-auto text-center">
        <motion.button
          onClick={handleClick}
          className="bg-primary text-primary-foreground font-body text-lg sm:text-xl px-10 py-5 rounded-full animate-pulse-glow hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Click for a Surprise 💝
        </motion.button>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-card rounded-2xl p-8 sm:p-12 max-w-md w-full text-center box-glow border border-accent relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              <h3 className="text-4xl font-cursive text-primary mb-4">
                You Are My Everything
              </h3>
              <p className="font-body text-foreground/80 italic leading-relaxed">
                My dearest Loveeey, You don't have to worry about me losing feelings for you Because I've always dream to have someone like you in my life to Love, Words can't even express how I feel about you. Only God knows how much I love you. 
                You are my today and all of my tomorrows. 💕
              </p>
              <p className="font-cursive text-2xl text-primary mt-6">
                Forever Yours ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SurpriseButton;
