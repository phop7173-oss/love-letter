type Props = {
  title: string;
  subtitle: string;
};

function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[0.5em] text-yellow-500">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-black">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;