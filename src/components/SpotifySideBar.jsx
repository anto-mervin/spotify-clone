import { Avatar, Flex, Image, Link, Tooltip } from "@chakra-ui/react";
import { SpotifyLogo } from "../assets/export";

const SpotifySideBar = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        w={"10vw"}
      >
        <Image src={SpotifyLogo} w={"135px"} h={"40px"} />
        <Link href={"https://www.linkedin.com/in/anto-mervin/"} isExternal>
          <Tooltip label="Hey, It's Mervin Here" color={"white"}>
            <Avatar
              src="https://media.licdn.com/dms/image/v2/D5603AQER7jkAHSzFiA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695105301772?e=1733356800&v=beta&t=p_xbiMTSuHh0fVIaMj_Z-Crtue6lSI6zq7dbAB5zDBQ"
              boxSize={"48px"}
            />
          </Tooltip>
        </Link>
      </Flex>
    </>
  );
};

export default SpotifySideBar;
