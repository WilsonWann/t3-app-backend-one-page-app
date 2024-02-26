import { useEffect, useState, type PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Box, Flex } from "@chakra-ui/react";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { useRouter } from "next/router";

const links: LinkType[] = [
  {
    name: "總覽",
    href: "/dashboard",
    icon: HiOutlinePresentationChartBar,
  },
  {
    name: "商品",
    href: "/product",
    icon: BsBoxSeam,
  },
  {
    name: "訂單",
    href: "/order",
    icon: LuClipboardList,
  },
];

const RootLayout = (props: PropsWithChildren) => {
  const router = useRouter();
  const [pageName, setPageName] = useState<React.ReactNode>(
    links.find((link) => link.href === router.asPath)?.name,
  );

  return (
    <main className="flex min-h-screen flex-row items-center justify-start overflow-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Box h="100vh" w="250px" flexGrow={0}>
        <Sidebar links={links} setPageName={setPageName} />
      </Box>
      <Flex direction={"column"} h={"100vh"} flexGrow={1} justify={"start"}>
        <Header>{pageName}</Header>
        {props.children}
      </Flex>
    </main>
  );
};

export default RootLayout;
