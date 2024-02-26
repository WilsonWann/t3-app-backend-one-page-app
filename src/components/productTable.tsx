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
} from "@chakra-ui/react";
type Props = {
  length: number;
  filteredProducts: ProductType[];
};

const ProductTable = (props: Props) => {
  const [checkedItems, setCheckedItems] = React.useState(
    Array(length).fill(false),
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const onParentCheckBoxClick = (checked: boolean) => {
    setCheckedItems(Array(length).fill(checked));
  };

  const onCheckBoxClick = (checked: boolean, index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

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
            <Th>
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => onParentCheckBoxClick(e.target.checked)}
              />
            </Th>
            <Th fontSize={"lg"}>id</Th>
            <Th fontSize={"lg"}>photo</Th>
            <Th fontSize={"lg"}>name</Th>
            <Th fontSize={"lg"}>stock</Th>
            <Th fontSize={"lg"} isNumeric>
              price
            </Th>
            <Th fontSize={"lg"}>created at</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.filteredProducts.map((product, index) => (
            <Tr key={product.id}>
              <Td className="peer has-[:checked]:!bg-red-200">
                <Checkbox
                  isChecked={checkedItems[index]}
                  onChange={(e) => onCheckBoxClick(e.target.checked, index)}
                />
              </Td>
              <Td className="peer-has-[:checked]:bg-red-200" fontSize={"md"}>
                #{product.id}
              </Td>
              <Td className="peer-has-[:checked]:bg-red-200" fontSize={"md"}>
                <AspectRatio maxW={24} ratio={1} flexShrink={0}>
                  <Image
                    src={product.image}
                    alt={product.description}
                    objectFit={"cover"}
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Td>
              <Td className="peer-has-[:checked]:bg-red-200" fontSize={"md"}>
                {product.name}
              </Td>
              <Td className="peer-has-[:checked]:bg-red-200" fontSize={"md"}>
                <Tooltip
                  hasArrow
                  label={`in stock quantity: ${product.inStockQty}`}
                  aria-label={"in stock quantity"}
                >
                  {product.inStockQty > 0 ? (
                    <Text color="green.500">In Stock</Text>
                  ) : (
                    <Text color="red.500">Out of Stock</Text>
                  )}
                </Tooltip>
              </Td>
              <Td
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
                isNumeric
              >
                {`$${product.price}`}
              </Td>
              <Td className="peer-has-[:checked]:bg-red-200" fontSize={"md"}>
                {product.createdAt}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
