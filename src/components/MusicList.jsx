import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MusicSearch from "./MusicSearch";
import MusicStack from "./MusicStack";
import useResponsive from "../hooks/useResponsive";

const MusicList = ({ data, onSetAccentColor }) => {
  const tabProps = {
    borderWidth: 0,
    borderColor: "transparent",
    fontSize: "24px",
    fontWeight: "bold",
    opacity: 0.5,
    _selected: {
      opacity: 1,
      transform: "scale(1.1)",
    },
  };

  const [songs, setSongs] = useState(data.data || []);
  const [topsongs, settopSongs] = useState(
    data.data?.filter((song) => song.top_track == true) || []
  );
  const [Search, setSearch] = useState("");

  const { isDesktop } = useResponsive();

  useEffect(() => {
    if (Search === "") {
      setSongs(data.data);
      settopSongs(data.data?.filter((song) => song.top_track == true));
    } else {
      setSongs(
        data.data?.filter(
          (item) =>
            item?.name?.toLowerCase()?.includes(Search?.toLowerCase()) ||
            item?.artist?.toLowerCase()?.includes(Search?.toLowerCase())
        )
      );
      settopSongs(
        topsongs?.filter(
          (item) =>
            item?.name?.toLowerCase()?.includes(Search?.toLowerCase()) ||
            item?.artist?.toLowerCase()?.includes(Search?.toLowerCase())
        )
      );
    }
  }, [Search]);

  useEffect(() => {
    if (data.data) {
      setSongs(data.data);
    }
  }, [data.data]);

  return (
    <Flex h="100vh" w={isDesktop ? "432px" : "100vw"}>
      <Tabs w={"100%"} p={3}>
        <TabList fontSize={"24px"} as={Flex} columnGap={5}>
          <Tab {...tabProps}>For You</Tab>
          <Tab {...tabProps}>Top Tracks</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MusicSearch Search={Search} setSearch={setSearch} />
            <Flex
              h={"90vh"}
              overflowY={"scroll"}
              direction={"column"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {songs.length == 0 ? (
                <Text fontWeight={600} textAlign={"center"} mt={"20px"}>
                  No songs or artist Found
                </Text>
              ) : (
                songs.map((item, index) => (
                  <MusicStack
                    {...item}
                    key={index}
                    onSetAccentColor={onSetAccentColor}
                  />
                ))
              )}
            </Flex>
          </TabPanel>
          <TabPanel>
            <MusicSearch Search={Search} setSearch={setSearch} />
            <Flex
              overflowY={"scroll"}
              direction={"column"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {topsongs.length == 0 ? (
                <Text fontWeight={600} textAlign={"center"} mt={"20px"}>
                  No songs or artist Found
                </Text>
              ) : (
                topsongs.map((item, index) => (
                  <MusicStack
                    {...item}
                    key={index}
                    onSetAccentColor={onSetAccentColor}
                  />
                ))
              )}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MusicList;
