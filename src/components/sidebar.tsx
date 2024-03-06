import React from "react";
import { Flex } from "@chakra-ui/react";
import LogoWithText from "./logoWithText";
import CustomLink from "./customLink";
import AvatarBadge from "./avatarBadge";
import type { LinkType } from "~/types";

type Props = {
  links: LinkType[];
  setPageName: (pageName: React.ReactNode) => void;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <Flex
        h="100%"
        direction="column"
        justify={"start"}
        bg="blue.500"
        px={4}
        gap={8}
      >
        <LogoWithText />
        <AvatarBadge />
        {props.links.map((link) => (
          <CustomLink
            key={link.href}
            icon={link.icon}
            href={link.href}
            onLinkClick={props.setPageName}
          >
            {link.name}
          </CustomLink>
        ))}
      </Flex>
    </>
  );
};

export default Sidebar;
