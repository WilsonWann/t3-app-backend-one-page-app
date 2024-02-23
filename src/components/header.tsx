import {
  Avatar,
  Badge,
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Flex
      direction={"row"}
      bg="blue.500"
      h={16}
      w="100%"
      align={"center"}
      columnGap={4}
      color="white"
      p={4}
    >
      <Text>Overview</Text>
      <Spacer />
      <IconButton
        aria-label="Settings"
        icon={<MdSettings />}
        rounded={"full"}
        p="0"
        minW="4"
        w="4"
        h="4"
        bg="transparent"
        colorScheme={"white"}
      />
      <IconButton
        aria-label="Notifications"
        icon={<FaRegBell />}
        rounded={"full"}
        p="0"
        minW="4"
        w="4"
        h="4"
        bg="transparent"
        colorScheme={"white"}
      />
      <Flex>
        <Avatar src="https://i.imgur.com/FcYnITJ.png" />
        <Box ml="3">
          <Text fontWeight="bold">
            Wilson Wan
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">Full Stack Engineer</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
