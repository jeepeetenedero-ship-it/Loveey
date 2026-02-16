import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoveStory = () => {
  return (
    <section className="py-24 px-6 gradient-romantic">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-5xl sm:text-6xl font-cursive text-primary mb-8">
            Mahal kita Loveeey ko Subraa Iloveyouuu every single day always remember that.
          </h2>
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl font-body text-foreground/80 leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          God knows how endlessly grateful l am to have someone like you in my life. Every day, I find myself smiling for no reason just because I remember that I'm loved by the most amazing girlfriend anyone could ever ask for. Hindi ko man magawang yakapin kita sa mga oras na kailangan mo, lagi kang nasa mga dasal ko. 'Pag hindi na kaya ng mga salita, ipinapaabot ko sa langit ang mga hindi ko masabing alalahanin. Sa bawat dasal, sana maramdaman mong hindi ka kailanman nag-iisa.
Kahit malayo ako, ipinagdadasal kong sana dumaan sa puso mo ang init ng pagmamahal na pilit kong ipinaparamdam kahit hindi ko masabi ng diretso.
Alam kong hindi sapat ang mga dasal para punan ang puwang ng mga yakap na hindi ko maibigay, pero sana maging sapat muna ito para sa mga gabing tahimik, at sa mga araw na mabigat. May mga bagay talagang hindi madaling sabihin, kaya't ipinapasa ko sa langit, ang lahat ng gusto kong iparating. Para sa'yo 'yung t bawat bulong ko sa gabi, bawat pag-idlip na may dasal. Dahil kung hindi ko man kaya sa salita, pipiliin ko pa ring marating ka sa panalangin.
Hindi mo man marinig, pero bawat dasal ko ay yakap, dahan-dahan, taimtim, at totoo. Umaabot 'yan kahit kailanman, kahit saanman. At kahit kailan, hindi mo kailangang harapin ang mundo mag-isa.. 💕
        </motion.p>
      </div>
    </section>
  );
};

export default LoveStory;
