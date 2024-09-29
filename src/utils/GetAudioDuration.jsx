// GetAudioDuration.jsx
import { useEffect, useState } from "react";

const useAudioDuration = (url) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (!url) return; // Prevent error if url is not provided

    const audio = new Audio(url);
    const fetchDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", fetchDuration);

    // Cleanup the event listener on component unmount
    return () => {
      audio.removeEventListener("loadedmetadata", fetchDuration);
    };
  }, [url]); // Ensure effect runs when url changes

  return formatDuration(duration);
};

const formatDuration = (duration) => {
  if (duration === null) return "0:00"; // Handle null duration
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default useAudioDuration;
