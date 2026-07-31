import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import MusicPlayer from "../audio/MusicPlayer";
import IntroSection from "../sections/IntroSection";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <IntroSection onOpen={() => {
  // We'll connect music and scrolling in Milestone 4
}} />
      <MusicPlayer />
    </div>
  );
}

export default Home;