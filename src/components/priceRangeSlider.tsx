import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  minValue: number;
  maxValue: number;
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

export type Ref = React.MutableRefObject<ProductType[]>;

const PriceRangeSlider = (props: Props) => {
  const { minValue, maxValue, setPrices } = props;

  const max = React.useMemo(
    () => 10 ** Math.floor(maxValue / 10 ** (maxValue.toFixed(0).length - 1)),
    [maxValue],
  );

  const [sliderValue, setSliderValue] = React.useState([minValue, maxValue]);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const onSliderValueChange = (values: number[]) => {
    setPrices(values);
    setSliderValue(values);
  };

  return (
    <Box flexDirection={"column"}>
      <Text as="h2" fontSize={"lg"} color={"black"}>
        Price Filter
      </Text>
      <RangeSlider
        id="slider"
        defaultValue={sliderValue}
        min={0}
        max={max}
        colorScheme="orange"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={["min", "max"]}
        onChangeEnd={(v) => onSliderValueChange(v)}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
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
    </Box>
  );
};

export default PriceRangeSlider;
