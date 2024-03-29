import { Button } from "@chakra-ui/react";
import type { ShoppingItem } from "@prisma/client";
import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
type Props = {
  sortBy: (isAsc: boolean, keyTitle: keyof ShoppingItem) => void;
  keyTitle?: keyof ShoppingItem;
  showTitle: string;
  activeSorting?: keyof ShoppingItem;
};

const SortableHeader = (props: Props) => {
  const [isAsc, setIsAsc] = React.useState(true);

  const { keyTitle = props.showTitle } = props;

  const onButtonClick = () => {
    setIsAsc((prevState) => {
      props.sortBy(prevState, keyTitle as keyof ShoppingItem);
      return !prevState;
    });
  };

  return (
    <Button
      rightIcon={isAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      variant={"ghost"}
      colorScheme={"orange"}
      color={"black"}
      onClick={onButtonClick}
      textTransform={"uppercase"}
      isActive={keyTitle === props.activeSorting}
      className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
    >
      {props.showTitle}
    </Button>
  );
};

export default SortableHeader;
