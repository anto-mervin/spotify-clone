import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useHexToRgba } from "../utils/useHexToRgba";

const MusicSearch = ({ Search, setSearch }) => {
  const rgbaColor = useHexToRgba("#F7931A", 0.2);
  return (
    <Box pos={"relative"}>
      <Input
        placeholder="Search Song, Artist"
        _placeholder={{
          color: "white",
        }}
        mt={5}
        p={2}
        py={3}
        borderRadius={"8px"}
        bg={rgbaColor}
        color={"white"}
        outline={0}
        borderWidth={0}
        width={"100%"}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button p={2} pos={"absolute"} right={2} top={"25px"}>
        <CiSearch size={"20px"} />
      </Button>
    </Box>
  );
};

export default MusicSearch;
