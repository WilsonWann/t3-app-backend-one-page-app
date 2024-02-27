import { Flex } from "@chakra-ui/react";
import React from "react";
import PriceRangeSlider from "./priceRangeSlider";
import ProductNameFilter from "./productNameFilter";

type Props = {
  products: ProductType[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const ProductFilters = (props: Props) => {
  const { products, setFilteredProducts } = props;
  const [prices, setPrices] = React.useState<number[]>([]);
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    let lowerLimit = Math.min(...products.map((product) => product.price));
    let upperLimit = Math.max(...products.map((product) => product.price));
    if (prices || name) {
      if (prices.length !== 0) {
        lowerLimit = prices[0]!;
        upperLimit = prices[1]!;
      }
      const newProducts = [...products];
      const newFilteredProducts = newProducts.filter(
        (product) =>
          product.price >= lowerLimit &&
          product.price <= upperLimit &&
          product.name.toLocaleLowerCase().includes(name),
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [prices, name]);

  return (
    <Flex
      direction="column"
      justify="start"
      align="center"
      width={"md"}
      h={"auto"}
      gap="6"
      className="*:flex *:w-full *:items-center *:justify-center *:rounded-xl "
    >
      <PriceRangeSlider
        minValue={Math.min(...products.map((product) => product.price))}
        maxValue={Math.max(...products.map((product) => product.price))}
        setPrices={setPrices}
      />
      <ProductNameFilter setName={setName} />
    </Flex>
  );
};

export default ProductFilters;
