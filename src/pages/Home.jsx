// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SpotifySideBar from "../components/SpotifySideBar";
import MusicList from "../components/MusicList";
import MusicPlayer from "../components/MusicPlayer";
import useSongData from "../api/useSongData";
import useLoading from "../hooks/useLoading";
import { SpotifyGIF } from "../assets/export";
import useResponsive from "../hooks/useResponsive";

const Home = () => {
  const { id } = useParams();
  const { songData, error } = useSongData();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [accentColor, setAccentColor] = useState("#000");
  const [selectedSong, setSelectedSong] = useState(null); // Start with null
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [Search, setSearch] = useState(null);

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 5000);
  }, []);
  useEffect(() => {
    if (id && songData) {
      console.log(songData?.data);
      const song = songData?.data?.find((song) => song.id == id);
      setSelectedSong(song);
    }
  }, [id, songData]);

  if (isLoading) {
    return (
      <Flex
        h={"100vh"}
        w={"100vw"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#000"}
      >
        <Image src={SpotifyGIF} />
      </Flex>
    );
  }

  if (error || !songData) {
    return <div>Error: {error || "Song data not available"}</div>;
  }

  return (
    <>
      {isDesktop && (
        <Flex
          bg={accentColor}
          color={"white"}
          h={"100vh"}
          w={"100vw"}
          p={8}
          overflowY={"hidden"}
        >
          <SpotifySideBar />
          <MusicList
            data={songData}
            onSetAccentColor={setAccentColor}
            accentColor={accentColor}
            Search={Search}
            setSearch={setSearch}
          />
          <Flex
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexGrow={1}
          >
            <MusicPlayer selectedSong={selectedSong} />
          </Flex>
        </Flex>
      )}

      {(isMobile || isTablet) && (
        <Flex
          bg={accentColor}
          color={"white"}
          h={"100vh"}
          w={"100vw"}
          p={1}
          overflowY={"hidden"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <MusicList
            data={songData}
            onSetAccentColor={setAccentColor}
            accentColor={accentColor}
          />
          <MusicPlayer
            selectedSong={selectedSong}
            BgAccent={accentColor}
            mini
          />
        </Flex>
      )}
    </>
  );
};

export default Home;
