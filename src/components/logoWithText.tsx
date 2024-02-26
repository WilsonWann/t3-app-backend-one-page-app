import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "~/assets/logo/logo_white.png";

type Props = {};

const LogoWithText = (props: Props) => {
  return (
    <Flex
      bg="blue.500"
      h={16}
      dir={"row"}
      justify={"space-evenly"}
      align={"flex-end"}
    >
      <Box w={36}>
        <AspectRatio maxW={36} ratio={274 / 68} flexShrink={0}>
          <Image src={logo.src} alt="musense logo" objectFit={"cover"} />
        </AspectRatio>
      </Box>
      <Text
        color="white"
        fontSize={24}
        w={"fit-content"}
        noOfLines={1}
        casing={"uppercase"}
      >
        Mu
      </Text>
    </Flex>
  );
};

export default LogoWithText;
