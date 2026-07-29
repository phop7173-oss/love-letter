type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400">
      {children}
    </button>
  );
}

export default Button;