import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import React from "react";
import AvatarBadge from "./avatarBadge";
import { MdAddCircleOutline } from "react-icons/md";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <Flex
      direction={"row"}
      bg="blue.500"
      h={16}
      w="auto"
      align={"center"}
      columnGap={4}
      color="white"
      p={4}
      boxSizing={"border-box"}
    >
      <Text>{props.children ?? ""}</Text>
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
      <Button
        leftIcon={<MdAddCircleOutline />}
        colorScheme="orange"
        variant="solid"
        rounded={"md"}
        onClick={() => router.push("/product/create")}
      >
        新增商品
      </Button>
    </Flex>
  );
};

export default Header;
