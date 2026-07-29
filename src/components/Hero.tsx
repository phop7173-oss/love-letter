import Button from "./Button";
function Hero() {
  return (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
    {/* Background glow */}
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl text-center">
      <p className="mb-6 text-sm uppercase tracking-[0.6em] text-yellow-500">
        FOR THAWE ❤️
      </p>

      <h1 className="text-5xl font-black leading-tight md:text-7xl">
        Happy Birthday,
        <br />
        My Love.
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        Every line of code on this website was written with love.
        Every page holds a memory.
        Every animation tells a story.
        Every click is another piece of my heart.
      </p>

      <div className="mt-12">
        <Button>Open My Heart</Button>
      </div>
    </div>
  </section>
);}