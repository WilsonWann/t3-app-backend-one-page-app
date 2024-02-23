import type { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Box, Flex } from "@chakra-ui/react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-row items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Box h="100vh" w="250px" flexGrow={0}>
        <Sidebar />
      </Box>
      <Flex direction={"column"} h={"100vh"} flexGrow={1} justify={"start"}>
        <Header />
        {props.children}
      </Flex>
    </main>
  );
};

export default PageLayout;
