import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const AvatarBadge = (props: Props) => {
  return (
    <Flex align="center" justify={"center"} color="white">
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
  );
};

export default AvatarBadge;
