import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveStory from "@/components/LoveStory";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import MemoryGallery from "@/components/MemoryGallery";
import CountdownTimer from "@/components/CountdownTimer";
import SurpriseButton from "@/components/SurpriseButton";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <HeroSection />
      <LoveStory />
      <ReasonsILoveYou />
      <MemoryGallery />
      <CountdownTimer />
      <SurpriseButton />
      <footer className="py-8 text-center bg-background">
        <p className="font-cursive text-2xl text-primary">Made with love, just for you ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
