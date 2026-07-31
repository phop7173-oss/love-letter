import { useEffect, useState } from "react";

type LoadingScreenProps = {
  onFinish: () => void;
};

function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 400);

          return 100;
        }

        return old + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white">

      <p className="mb-6 tracking-[0.5em] text-yellow-500 uppercase">
        FOR THAWE ❤️
      </p>

      <h1 className="text-5xl font-black">
        Happy Birthday
      </h1>

      <p className="mt-10 text-zinc-400">
        Loading...
      </p>

      <div className="mt-6 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full bg-yellow-500 transition-all duration-75"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-4 text-sm text-zinc-500">
        {progress}%
      </p>

    </div>
  );
}

export default LoadingScreen;