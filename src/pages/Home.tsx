import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <HeroSection />
      <ScrollIndicator />
    </div>
  );
}

export default Home;