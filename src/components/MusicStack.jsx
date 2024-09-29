// MusicStack.jsx
import React from "react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useAudioDuration from "../utils/GetAudioDuration"; // Updated import
import { useHexToRgba } from "../utils/useHexToRgba";

const MusicStack = ({
  name,
  url,
  id,
  artist,
  cover,
  accent,
  onSetAccentColor,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const duration = useAudioDuration(url);

  const handleClick = () => {
    onSetAccentColor(accent);
    navigate(`/${id}`); // Navigate to the music details page with the id
  };

  return (
    <Flex
      w="100%"
      h="80px"
      my={3}
      p={5}
      alignItems={"center"}
      borderRadius={10}
      as={Button}
      onClick={handleClick} // Use the handleClick function
      _hover={{
        bg: useHexToRgba("#F7931A", 0.1),
      }}
    >
      <Avatar
        boxSize={"48px"}
        src={`https://cms.samespace.com/assets/${cover}`}
      />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Flex flexDirection={"column"} columnGap={2} ml={3}>
          <Text fontSize={"18px"}>{name}</Text>
          <Text fontSize={"14px"} opacity={0.7}>
            {artist}
          </Text>
        </Flex>
        <Text>{duration}</Text>
      </Flex>
    </Flex>
  );
};

export default MusicStack;
