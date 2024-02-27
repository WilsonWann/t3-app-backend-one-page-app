import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const ProductNameFilter = (props: Props) => {
  const { setName } = props;

  return (
    <Box flexDirection={"column"}>
      <Text as="h2" fontSize={"lg"} color={"black"}>
        Name Filter
      </Text>
      <Input
        color="black"
        focusBorderColor="red.100"
        placeholder="Basic usage"
        onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
      />
    </Box>
  );
};

export default ProductNameFilter;
