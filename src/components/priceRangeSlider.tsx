import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  products: ProductType[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export type Ref = React.MutableRefObject<ProductType[]>;

const PriceRangeSlider = (props: Props) => {
  const { products, setFilteredProducts } = props;

  const minValue = Math.min(...products.map((product) => product.price));
  const maxValue = Math.max(...products.map((product) => product.price));
  const [sliderValue, setSliderValue] = React.useState([minValue, maxValue]);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const onSliderValueChange = (values: number[]) => {
    const lowerLimit = values[0]!;
    const upperLimit = values[1]!;
    const newProducts = [...products];
    const newFilteredProducts = newProducts.filter(
      (product) => product.price >= lowerLimit && product.price <= upperLimit,
    );

    setFilteredProducts(newFilteredProducts);
    setSliderValue(values);
  };

  return (
    <RangeSlider
      id="slider"
      defaultValue={sliderValue}
      min={0}
      max={maxValue}
      colorScheme="teal"
      onChange={(v) => onSliderValueChange(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      aria-label={["min", "max"]}
      onChangeEnd={(val) => console.log(val)}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`$${sliderValue[0]}`}
      >
        <RangeSliderThumb index={0} />
      </Tooltip>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`$${sliderValue[1]}`}
      >
        <RangeSliderThumb index={1} />
      </Tooltip>
    </RangeSlider>
  );
};

export default PriceRangeSlider;
