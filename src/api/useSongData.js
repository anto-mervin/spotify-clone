// src/hooks/useSongData.js
import { useEffect, useState } from "react";

const useSongData = () => {
  const [songData, setSongData] = useState([]);

  const [error, setError] = useState(null);

  const fetchSongData = async () => {
    try {
      const response = await fetch("https://cms.samespace.com/items/songs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSongData(data);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchSongData();
  }, []);

  return { songData, error };
};

export default useSongData;
