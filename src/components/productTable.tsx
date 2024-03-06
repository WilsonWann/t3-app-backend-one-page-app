import React from "react";
import {
  Checkbox,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Tooltip,
  AspectRatio,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";
import SortableHeader from "./sortableHeader";
import { ShoppingItem } from "@prisma/client";
import dateFormat from "~/utils/dateFormat";
import dollarFormat from "~/utils/dollarFormat";

type Props = {
  filteredProducts: ShoppingItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ShoppingItem[]>>;
};

const ProductTable = (props: Props) => {
  const { filteredProducts, setFilteredProducts } = props;

  const [activeSorting, setActiveSorting] = React.useState<
    keyof ShoppingItem | undefined
  >();

  const sortingBy = React.useCallback(
    (isAsc: boolean, sortingTitle: keyof ShoppingItem) => {
      setActiveSorting(sortingTitle);
      const firstProduct = filteredProducts.at(0);
      if (!firstProduct) return;

      if (typeof firstProduct[sortingTitle] === "string") {
        setFilteredProducts((prevFilteredProducts) =>
          prevFilteredProducts.toSorted((a, b) =>
            isAsc
              ? `${b[sortingTitle]}`.localeCompare(`${a[sortingTitle]}`)
              : `${a[sortingTitle]}`.localeCompare(`${b[sortingTitle]}`),
          ),
        );
      }

      if (typeof firstProduct[sortingTitle] === "number") {
        setFilteredProducts((prevFilteredProducts) =>
          prevFilteredProducts.toSorted((a, b) =>
            isAsc
              ? +(b[sortingTitle] ?? 0) - +(a[sortingTitle] ?? 0)
              : +(a[sortingTitle] ?? 0) - +(b[sortingTitle] ?? 0),
          ),
        );
      }
    },
    [filteredProducts],
  );

  const [checkedItems, setCheckedItems] = React.useState(
    Array(filteredProducts.length).fill(false),
  );

  const parentCheckBoxClick = React.useCallback(
    (checked: boolean) =>
      setCheckedItems(Array(filteredProducts.length).fill(checked)),
    [filteredProducts],
  );

  const childCheckBoxClick = React.useCallback(
    (checked: boolean, index: number) =>
      setCheckedItems((prevCheckedItems) => {
        const newCheckedItems = [...prevCheckedItems];
        newCheckedItems[index] = checked;
        return newCheckedItems;
      }),
    [],
  );

  return (
    <TableContainer
      w="auto"
      h="100%"
      overflowX={{ base: "auto", md: "visible" }}
      overflowY={{ base: "visible", md: "unset" }}
    >
      <Table variant="striped" colorScheme="orange" color="black" size={"lg"}>
        <TableCaption fontWeight={"bold"} fontSize={"xl"} placement={"top"}>
          商品列表
        </TableCaption>
        <Thead>
          <Tr textTransform={"uppercase"}>
            <Th textAlign="center">
              <ParentCheckbox
                checkedItems={checkedItems}
                callback={parentCheckBoxClick}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                showTitle={"id"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle="imageSrc"
                showTitle={"photo"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"itemName"}
                showTitle={"name"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"itemAvailableQuantity"}
                showTitle={"stock"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"itemPrice"}
                showTitle={"price"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center" fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"createdAt"}
                showTitle={"created at"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th textAlign="center">actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map((product, index) => (
            <Tr key={product.id}>
              <Td
                textAlign={"center"}
                className="peer has-[:checked]:!bg-red-200"
              >
                <ChildCheckbox
                  index={index}
                  isChecked={checkedItems[index]}
                  callback={childCheckBoxClick}
                />
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <Tooltip
                  hasArrow
                  label={`${product.id}`}
                  aria-label={"item subtile and description"}
                >
                  <Text>{`${product.id.slice(0, 3)}...${product.id.slice(-3)}`}</Text>
                </Tooltip>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <AspectRatio maxW={24} ratio={1} flexShrink={0}>
                  <Tooltip
                    hasArrow
                    label={`alt: ${product.imageAlt}`}
                    aria-label={"item subtile and description"}
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      objectFit={"cover"}
                      rounded={"lg"}
                    />
                  </Tooltip>
                </AspectRatio>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <Tooltip
                  hasArrow
                  label={
                    <Flex direction={"column"}>
                      <Text>{`subtile: ${product.itemSubtitle}`}</Text>
                      <Text>{`description: ${product.itemDescription}`}</Text>
                    </Flex>
                  }
                  aria-label={"item subtile and description"}
                >
                  {product.itemName}
                </Tooltip>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <Tooltip
                  hasArrow
                  label={`in stock quantity: ${product.itemAvailableQuantity ?? 0}`}
                  aria-label={"in stock quantity"}
                >
                  {product.itemAvailableQuantity &&
                  product.itemAvailableQuantity > 0 ? (
                    <Text color="green.500">In Stock</Text>
                  ) : (
                    <Text color="red.500">Out of Stock</Text>
                  )}
                </Tooltip>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <Tooltip
                  hasArrow
                  label={`special price: ${dollarFormat(product.itemSpecialPrice ?? product.itemPrice)}`}
                  aria-label={"special price"}
                >
                  {`${dollarFormat(product.itemPrice)}`}
                </Tooltip>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                {dateFormat(product.createdAt)}
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
              >
                <Menu isLazy>
                  <MenuButton
                    aria-label="More actions"
                    as={IconButton}
                    icon={<MdMoreHoriz />}
                    variant={"ghost"}
                    colorScheme={"orange"}
                    color={"black"}
                    _expanded={{
                      bg: "orange.200",
                    }}
                  />
                  <MenuList>
                    <MenuItem
                      _hover={{ bg: "orange.100" }}
                      onClick={() => alert("copied!")}
                    >
                      Copy Link
                    </MenuItem>
                    <MenuItem
                      _hover={{ bg: "orange.100" }}
                      onClick={() => alert("editing!")}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      _hover={{ bg: "orange.100" }}
                      onClick={() =>
                        confirm("are you sure you want to delete this item?")
                      }
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;

type ParentCheckboxProps = {
  checkedItems: boolean[];
  callback: (checked: boolean) => void;
};
function ParentCheckbox(props: ParentCheckboxProps) {
  const allChecked = props.checkedItems.every(Boolean);
  const isIndeterminate = props.checkedItems.some(Boolean) && !allChecked;

  const onParentCheckBoxClick = (checked: boolean) => {
    props.callback && props.callback(checked);
  };

  return (
    <Checkbox
      isChecked={allChecked}
      isIndeterminate={isIndeterminate}
      onChange={(e) => onParentCheckBoxClick(e.target.checked)}
    />
  );
}

type ChildCheckboxProps = {
  index: number;
  isChecked: boolean;
  callback: (checked: boolean, index: number) => void;
};
function ChildCheckbox(props: ChildCheckboxProps) {
  const onCheckBoxClick = (checked: boolean, index: number) => {
    props.callback && props.callback(checked, index);
  };

  return (
    <Checkbox
      isChecked={props.isChecked}
      onChange={(e) => onCheckBoxClick(e.target.checked, props.index)}
    />
  );
}
