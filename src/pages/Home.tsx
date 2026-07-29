import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <ScrollIndicator />
    </div>
  );
}

export default Home;