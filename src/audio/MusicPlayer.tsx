import { useAudio } from "../hooks/useAudio";
import birthdayMusic from "../assets/music/Melanie_Martinez_Play_Date_Official_Lyric_VideoMP3_160K.mp3";
function MusicPlayer() {
  const {
    playing,
    toggle,
    volume,
    setVolume,
    currentTime,
    duration,
  } = useAudio(birthdayMusic);

  return (
    <div
      className="
      fixed
      bottom-6
      right-6
      w-80
      rounded-2xl
      bg-zinc-900/80
      backdrop-blur-xl
      p-5
      border
      border-zinc-700
      shadow-xl
      "
    >
      <h2 className="font-bold">
        Birthday Theme
      </h2>

      <p className="text-sm text-zinc-400">
        For Thawe ❤️
      </p>

      <button
        onClick={toggle}
        className="
        mt-4
        rounded-lg
        bg-yellow-500
        px-5
        py-2
        text-black
        font-semibold
        "
      >
        {playing ? "Pause" : "Play"}
      </button>

      <div className="mt-5">
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={(e) =>
            setVolume(Number(e.target.value))
          }
          className="w-full"
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {Math.floor(currentTime)} /
        {Math.floor(duration)} sec
      </p>
    </div>
  );
}

export default MusicPlayer;