import React from "react";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

type Props = {
  minValue: number;
  maxValue: number;
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

export type Ref = React.MutableRefObject<ProductType[]>;

const PriceRangeSlider = (props: Props) => {
  const { minValue, maxValue, setPrices } = props;

  const min = React.useMemo(() => Math.floor(minValue / 50) * 50, [minValue]);
  const max = React.useMemo(() => Math.ceil(maxValue / 50) * 50, [maxValue]);

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
        min={min}
        max={max}
        step={5}
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
          <RangeSliderThumb bgColor={"tomato"} index={0} />
        </Tooltip>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`$${sliderValue[1]}`}
        >
          <RangeSliderThumb bgColor={"tomato"} index={1} />
        </Tooltip>
      </RangeSlider>
    </Box>
  );
};

export default PriceRangeSlider;
