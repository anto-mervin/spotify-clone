// src/components/MusicPlayer.js
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import useResponsive from "../hooks/useResponsive";

const MusicPlayer = ({ selectedSong, mini, BgAccent }) => {
  const { isDesktop } = useResponsive();
  if (!selectedSong) {
    return <Text as={Flex}>{isDesktop ? "Select a song to play." : ""}</Text>;
  }

  return (
    <>
      {!mini && (
        <Flex w="480px" h="662.24px" flexDirection={"column"} rowGap={3}>
          <Flex w="214px" h="68px" flexDirection={"column"}>
            <Text fontSize={"32px"} fontWeight={700}>
              {selectedSong.name} {/* Display song name */}
            </Text>
            <Text fontSize={"16px"} opacity={0.5}>
              {selectedSong.artist} {/* Display artist name */}
            </Text>
          </Flex>
          <Image
            src={`https://cms.samespace.com/assets/${selectedSong.cover}`} // Use cover image URL
            boxSize={"480px"}
            borderRadius={5}
          />
          <AudioPlayer song={selectedSong.url} />
        </Flex>
      )}
      {mini && (
        <Flex
          pos={"absolute"}
          bottom={0}
          bg={BgAccent}
          w={"100vw"}
          height={"80px"}
          filter={"brightness(1.75)"}
          justifyContent={"space-between"}
        >
          <Flex>
            <Image
              src={`https://cms.samespace.com/assets/${selectedSong.cover}`} // Use cover image URL
              boxSize={"80px"}
              filter={"brightness(.50)"}
            />
            <Flex
              flexDirection={"column"}
              height={"100%"}
              justifyContent={"center"}
              ml={2}
            >
              <Text fontSize={"20px"} fontWeight={700}>
                {selectedSong.name} {/* Display song name */}
              </Text>
              <Text fontSize={"12px"} opacity={0.5}>
                {selectedSong.artist} {/* Display artist name */}
              </Text>
            </Flex>
          </Flex>

          <AudioPlayer song={selectedSong.url} mini />
        </Flex>
      )}
    </>
  );
};

export default MusicPlayer;
