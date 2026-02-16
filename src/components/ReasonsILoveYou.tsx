import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  { title: "Your Smile", detail: "It lights up my entire world and makes every bad day better." },
  { title: "Your Kindness", detail: "The way you care for everyone around you inspires me daily." },
  { title: "Your Laugh", detail: "Even I heard it once feels like I heard it every single day." },
  { title: "Your Strength", detail: "You face every challenge with grace and courage." },
  { title: "Your Eyes", detail: "I get lost in them every single time." },
  { title: "Your Heart", detail: "So big and full of love — it amazes me every day." },
  { title: "Your Hugs", detail: "They feel like home, no matter where we are." },
  { title: "Your Voice", detail: "I wanna heard it every single day Loveey ko." },
  { title: "Your Dreams", detail: "I love watching you chase them — and being part of them." },
  { title: "Everything", detail: "Every little thing about you makes me fall deeper in love." },
];

const FlipCard = ({ title, detail, index }: { title: string; detail: string; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-48 transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl bg-card box-glow flex flex-col items-center justify-center p-6 border border-accent"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-3xl mb-2">💖</span>
          <h3 className="text-2xl font-cursive text-primary">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 font-body">Tap to reveal</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl bg-primary flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-primary-foreground font-body text-center italic">{detail}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ReasonsILoveYou = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl sm:text-6xl font-cursive text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Something thats makes me feel truly alive
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <FlipCard key={i} title={reason.title} detail={reason.detail} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
