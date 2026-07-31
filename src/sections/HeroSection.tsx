import Button from "../components/Button";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-6 tracking-[0.5em] text-yellow-500 uppercase">
          FOR THAWE ❤️
        </p>

        <h1 className="text-6xl font-black leading-tight md:text-8xl">
          Happy Birthday
        </h1>

        <h2 className="mt-3 text-4xl text-zinc-300">
          My Love
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
          Every memory we made together became another line of code.
          This website is my birthday gift for you.
          I hope every click makes you smile.
        </p>

        <div className="mt-12">
          <Button>
            Open My Heart
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;