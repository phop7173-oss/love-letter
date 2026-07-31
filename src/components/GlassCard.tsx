type Props = {
  children: React.ReactNode;
};

function GlassCard({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition
      duration-300
      hover:scale-[1.02]
      hover:border-yellow-500/40
      "
    >
      {children}
    </div>
  );
}

export default GlassCard;