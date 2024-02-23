import React from "react";
import { useDisclosure, Flex } from "@chakra-ui/react";
import LogoWithText from "./logoWithText";
import CustomLink from "./customLink";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex h="100%" direction="column" justify={"start"} bg="blue.500" px={4}>
        <LogoWithText />
        <CustomLink icon={HiOutlinePresentationChartBar} href={"/overview"}>
          {" "}
          總覽{" "}
        </CustomLink>
        <CustomLink icon={BsBoxSeam} href={"/product"}>
          產品
        </CustomLink>
        <CustomLink icon={LuClipboardList} href={"/order"}>
          {" "}
          訂單{" "}
        </CustomLink>
      </Flex>
    </>
  );
};

export default Sidebar;
