import Button from "../components/Button";
import { useReveal } from "../hooks/useReveal";

type IntroSectionProps = {
  onOpen: () => void;
};

function IntroSection({ onOpen }: IntroSectionProps) {
  const showTitle = useReveal(300);
  const showSubtitle = useReveal(900);
  const showButton = useReveal(1500);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-6 uppercase tracking-[0.5em] text-yellow-500">
          FOR THAWE ❤️
        </p>

        <h1
          className={`text-6xl font-black transition-all duration-1000 md:text-8xl ${
            showTitle
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Happy Birthday
        </h1>

        <h2
          className={`mt-4 text-4xl transition-all duration-1000 ${
            showSubtitle
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          My Love
        </h2>

        <div
          className={`mt-12 transition-all duration-1000 ${
            showButton
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          <Button onClick={onOpen}>
            Open My Heart ❤️
          </Button>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;