import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";
import { Box, Container, Flex } from "@chakra-ui/react";
import PriceRangeSlider from "~/components/priceRangeSlider";
import ProductTable from "~/components/productTable";
// import Image from "next/image";

type Props = {};

const products: ProductType[] = [
  {
    id: "1",
    name: "Headphone",
    price: 100,
    description: "Product 1 description",
    image: "https://picsum.photos/150/150",
    createdAt: "2022-01-01",
    inStockQty: 10,
  },
  {
    id: "2",
    name: "Shoes",
    price: 250,
    description: "Product 1 description",
    image: "https://picsum.photos/250/250",
    createdAt: "2022-03-12",
    inStockQty: 5,
  },
  {
    id: "3",
    name: "Digital clock",
    price: 348,
    description: "Product 1 description",
    image: "https://picsum.photos/350/350",
    createdAt: "2022-08-19",
    inStockQty: 0,
  },
  {
    id: "4",
    name: "Toy car",
    price: 198,
    description: "Product 1 description",
    image: "https://picsum.photos/450/450",
    createdAt: "2023-05-02",
    inStockQty: 6,
  },
];

const ProductPage: NextPageWithLayout = (props: Props) => {
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  return (
    <Flex
      maxH={"100%"}
      maxW={"100%"}
      gap={{ base: "8", md: "5" }}
      direction={{ base: "column", md: "column" }}
      justify={{ base: "start", md: "center" }}
      align={"center"}
    >
      <Container w="fit-content" h="100%" paddingInline={0}>
        <Flex
          direction="column"
          justify="start"
          align="center"
          width={"md"}
          h={"auto"}
          gap="4"
          className="*:flex *:w-full *:items-center *:justify-center *:rounded-xl *:bg-orange-600"
        >
          <PriceRangeSlider
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <Box>asdfasdfasdf</Box>
        </Flex>
      </Container>
      <ProductTable
        length={filteredProducts.length}
        filteredProducts={filteredProducts}
      />
    </Flex>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default ProductPage;
