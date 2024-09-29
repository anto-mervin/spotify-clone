import React, { useState, useRef, useEffect } from "react";
import { Button, Text, Flex, Input } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useParams } from "react-router-dom";

const AudioPlayer = ({ song, mini }) => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsPlaying(false);
  }, [id]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSliderChange = (event) => {
    const value = Math.min(
      Math.max(parseFloat(event.target.value), 0),
      duration
    );
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const sliderStyles = {
    WebkitAppearance: "none",
    appearance: "none",
    width: "100%",
    height: "10px",
    background: "#FFFFFF",
    outline: "none",
    borderRadius: "100",
  };

  const thumbStyles = {
    WebkitAppearance: "none",
    appearance: "none",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#1db954",
    cursor: "pointer",
  };

  return (
    <>
      {!mini && (
        <Flex flexDirection={"column"}>
          <audio
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            src={song}
          />

          <Input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSliderChange}
            id="myRange"
            min={0}
            step={0.1}
            mb={4}
            sx={{
              ...sliderStyles,
              "&::-webkit-slider-thumb": thumbStyles,
              "&::-moz-range-thumb": thumbStyles,
              "&::-ms-thumb": thumbStyles,
            }}
          />
          <Flex
            opacity={0.5}
            fontSize={"12px"}
            justifyContent={"space-between"}
          >
            <Text>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </Text>
            <Text>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </Text>
          </Flex>
          <Flex justify="center" align="center" gap={4}>
            <Button
              onClick={togglePlayPause}
              borderRadius="full"
              bg={"white"}
              p={3}
              color={"black "}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </Button>
          </Flex>
        </Flex>
      )}

      {mini && (
        <Flex justify="center" align="center" gap={4}>
          <audio
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            src={song}
          />

          <Button
            onClick={togglePlayPause}
            borderRadius="full"
            bg={"white"}
            mr={2}
            p={3}
            color={"black "}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
        </Flex>
      )}
    </>
  );
};

export default AudioPlayer;
