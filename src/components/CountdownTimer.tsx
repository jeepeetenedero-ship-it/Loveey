import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getNextValentines = () => {
  const now = new Date();
  let year = now.getFullYear();
  const valentine = new Date(year, 1, 14); // Feb 14
  if (now > valentine) {
    year += 1;
  }
  return new Date(year, 1, 14);
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getNextValentines();
    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-5xl sm:text-6xl font-cursive text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Counting Down to Love
        </motion.h2>
        <p className="text-muted-foreground font-body mb-10">Until next Valentine's Day 💝</p>
        <div className="flex justify-center gap-4 sm:gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              className="bg-card rounded-xl p-4 sm:p-6 box-glow border border-accent min-w-[70px] sm:min-w-[90px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-5xl font-cursive text-primary">
                {String(block.value).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-body mt-1">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
