import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";
import { Container, Flex, Spacer, Text } from "@chakra-ui/react";
import ProductTable from "~/components/productTable";
import ProductFilters from "~/components/productFilters";
import { api } from "~/utils/api";
import type { ShoppingItem } from "@prisma/client";

type Props = {};

const ProductPage: NextPageWithLayout = (props: Props) => {
  const { data, isLoading } = api.shoppingItem.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return <InnerProductPage data={data} />;
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default ProductPage;

type InnerProductPageProps = {
  data: ShoppingItem[];
};
function InnerProductPage(props: InnerProductPageProps) {
  const [filteredProducts, setFilteredProducts] = React.useState(props.data);

  return (
    <Flex
      h={"100%"}
      maxW={"100%"}
      gap={{ base: "8", md: "5" }}
      direction={"column"}
      justify={"start"}
      align={"center"}
    >
      <Container
        paddingInline={0}
        display={"flex"}
        flexDir="column"
        justifyContent="start"
        alignItems="center"
      >
        <Text
          textAlign={"center"}
          as="h2"
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"black"}
        >
          搜尋商品
        </Text>
        <ProductFilters
          products={props.data}
          setFilteredProducts={setFilteredProducts}
        />
      </Container>
      <ProductTable
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Spacer />
    </Flex>
  );
}
