import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import PriceRangeSlider from "~/components/priceRangeSlider";
import ProductTable from "~/components/productTable";
import ProductNameFilter from "~/components/productNameFilter";
import ProductFilters from "~/components/productFilters";
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
      h={"100%"}
      maxW={"100%"}
      gap={{ base: "8", md: "5" }}
      direction={{ base: "column", md: "column" }}
      justify={{ base: "start", md: "center" }}
      align={"center"}
    >
      <Container w="fit-content" h="auto" paddingInline={0}>
        <ProductFilters
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </Container>
      <ProductTable filteredProducts={filteredProducts} />
      <Spacer />
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
