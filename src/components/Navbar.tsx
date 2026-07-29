function Navbar() {
  return (
    <header  className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="font-semibold tracking-widest">
          FOR THAWE ❤️
        </h1>

        <button
          className="rounded-full border border-yellow-500 px-5 py-2 transition hover:bg-yellow-500 hover:text-black"
        >
          Music
        </button>
      </div>
    </header>
  );
}

export default Navbar;