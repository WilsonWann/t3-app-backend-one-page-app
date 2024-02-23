import React from "react";
import {
  AspectRatio,
  useDisclosure,
  Flex,
  Spacer,
  Box,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import logo from "~/assets/logo/logo_white.png";
import { Button } from "@chakra-ui/react";

type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex h="100%" direction="column" justify={"start"} bg="blue.500">
        <Flex
          bg="blue.500"
          h={16}
          dir={"row"}
          justify={"space-evenly"}
          align={"flex-end"}
          px={2}
          mb={6}
        >
          <Box w={36}>
            <AspectRatio maxW={36} ratio={274 / 68} flexShrink={0}>
              <Image src={logo.src} alt="musense logo" objectFit={"cover"} />
            </AspectRatio>
          </Box>
          <Text
            color="white"
            fontSize={24}
            w={"70px"}
            noOfLines={1}
            casing={"uppercase"}
          >
            Mu
          </Text>
        </Flex>
        <Flex
          dir={"row"}
          justify={"start"}
          align={"center"}
          h={16}
          w={"100%"}
          p={4}
        >
          <Link color="teal.500" href="#">
            <Text color={"white"}>About</Text>
          </Link>
        </Flex>
        <Flex
          dir={"row"}
          justify={"start"}
          align={"center"}
          h={16}
          w={"100%"}
          p={4}
        >
          <Link color="teal.500" href="#">
            <Text color={"white"}>About</Text>
          </Link>
        </Flex>
        <Flex
          dir={"row"}
          justify={"start"}
          align={"center"}
          h={16}
          w={"100%"}
          p={4}
        >
          <Link color="teal.500" href="#">
            <Text color={"white"}>About Test</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
