import { useEffect, useRef, useState } from "react";

export function useAudio(src: string) {
  const audioRef = useRef(new Audio(src));

  const [playing, setPlaying] = useState(false);

  const [volume, setVolume] = useState(0.5);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = volume;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
    };
  }, [volume]);

  function toggle() {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  return {
    playing,
    toggle,
    volume,
    setVolume,
    currentTime,
    duration,
  };
}