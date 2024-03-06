import { Flex } from "@chakra-ui/react";
import React from "react";
import PriceRangeSlider from "./priceRangeSlider";
import ProductNameFilter from "./productNameFilter";
import type { ShoppingItem } from "@prisma/client";

type Props = {
  products: ShoppingItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ShoppingItem[]>>;
};

const ProductFilters = (props: Props) => {
  const { products, setFilteredProducts } = props;
  const [prices, setPrices] = React.useState<number[]>([]);
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    let lowerLimit = Math.min(...products.map((product) => product.itemPrice));
    let upperLimit = Math.max(...products.map((product) => product.itemPrice));
    if (prices || name) {
      if (prices.length !== 0) {
        lowerLimit = prices[0]!;
        upperLimit = prices[1]!;
      }
      const newProducts = [...products];
      const newFilteredProducts = newProducts.filter(
        (product) =>
          product.itemPrice >= lowerLimit &&
          product.itemPrice <= upperLimit &&
          product.itemName.toLocaleLowerCase().includes(name),
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [prices, name, products, setFilteredProducts]);

  return (
    <Flex
      direction="row"
      justify="start"
      align="center"
      width={"100%"}
      h={"auto"}
      gap="6"
      className="*:grow-1 *:flex *:w-full *:items-center *:justify-center *:rounded-xl"
    >
      <PriceRangeSlider
        minValue={Math.min(...products.map((product) => product.itemPrice))}
        maxValue={Math.max(...products.map((product) => product.itemPrice))}
        setPrices={setPrices}
      />
      <ProductNameFilter setName={setName} />
    </Flex>
  );
};

export default ProductFilters;
