type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-full
        bg-yellow-500
        px-8
        py-4
        text-lg
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:bg-yellow-400
        active:scale-95
        shadow-lg
        shadow-yellow-500/20
      "
    >
      {children}
    </button>
  );
}

export default Button;
