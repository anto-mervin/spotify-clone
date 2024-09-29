import { useEffect, useState } from "react";

const useAudioDuration = (url) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (!url) return;

    const audio = new Audio(url);
    const fetchDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", fetchDuration);

    return () => {
      audio.removeEventListener("loadedmetadata", fetchDuration);
    };
  }, [url]);

  return formatDuration(duration);
};

const formatDuration = (duration) => {
  if (duration === null) return "0:00";
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default useAudioDuration;
