import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

function MemorySection() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          title="Our Story"
          subtitle="MEMORIES"
        />

        <div className="grid gap-8 md:grid-cols-3">

          <GlassCard>
            <h3 className="text-2xl font-bold">
              💖 First Meeting
            </h3>

            <p className="mt-4 text-zinc-400">
              Write how you first met her.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-bold">
              🌸 Favorite Moment
            </h3>

            <p className="mt-4 text-zinc-400">
              Write your happiest memory.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-bold">
              ✨ Future Dream
            </h3>

            <p className="mt-4 text-zinc-400">
              Write your promise for the future.
            </p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}

export default MemorySection;