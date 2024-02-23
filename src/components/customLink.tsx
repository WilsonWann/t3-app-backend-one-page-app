import React from "react";
import { Box, Flex, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { MdSettings } from "react-icons/md";
import type { IconType } from "react-icons/lib";

type Props = {
  href?: string;
  icon?: IconType;
  children: React.ReactNode;
};

const CustomLink = (props: Props) => {
  return (
    <Flex
      dir={"row"}
      justify={"start"}
      align={"center"}
      h={16}
      w={"100%"}
      py={4}
      px={4}
    >
      <LinkBox
        as={Box}
        color="white"
        _hover={{
          color: "orange",
        }}
        className="[&:has(.active)]:border-b [&:has(.active)]:border-b-orange-500 [&:has(.active)]:text-orange-500"
      >
        <NavLink href={props.href ?? "/#"}>
          <Flex dir={"row"} justify={"start"} align={"center"} gap={2}>
            <Icon as={props.icon ?? MdSettings} w={4} h={4} />
            <Text>{props.children}</Text>
          </Flex>
        </NavLink>
      </LinkBox>
    </Flex>
  );
};

export default CustomLink;
