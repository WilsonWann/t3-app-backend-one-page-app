import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { MdSettings } from "react-icons/md";
import type { IconType } from "react-icons/lib";

type Props = {
  href?: string;
  icon?: IconType;
  children: React.ReactNode;
  onLinkClick: (children: React.ReactNode) => void;
};

const CustomLink = (props: Props) => {
  const onLinkClick = () => props.onLinkClick(props.children);
  return (
    <Flex
      dir={"row"}
      justify={"start"}
      align={"center"}
      h={"fit-content"}
      w={"100%"}
      py={0}
      px={4}
    >
      <Box
        color="white"
        _hover={{
          color: "orange",
        }}
        className="has-[.active]:border-b has-[.active]:border-b-orange-500 has-[.active]:text-orange-500"
        onClick={onLinkClick}
      >
        <NavLink href={props.href ?? "/#"}>
          <Flex dir={"row"} justify={"start"} align={"center"} gap={2}>
            <Icon as={props.icon ?? MdSettings} w={4} h={4} />
            <Text>{props.children}</Text>
          </Flex>
        </NavLink>
      </Box>
    </Flex>
  );
};

export default CustomLink;
