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
} from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";
import SortableHeader from "./sortableHeader";

type Props = {
  filteredProducts: ProductType[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    calendar: "ko-KR",
  };
  const dateFormat = new Intl.DateTimeFormat("ko-KR");
  return dateFormat.format(date);
};

const ProductTable = (props: Props) => {
  const { filteredProducts, setFilteredProducts } = props;

  const [activeSorting, setActiveSorting] = React.useState<
    keyof ProductType | undefined
  >();

  const sortingBy = React.useCallback(
    (isAsc: boolean, sortingTitle: keyof ProductType) => {
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
              ? +b[sortingTitle] - +a[sortingTitle]
              : +a[sortingTitle] - +b[sortingTitle],
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
            <Th>
              <ParentCheckbox
                checkedItems={checkedItems}
                callback={parentCheckBoxClick}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                showTitle={"id"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle="image"
                showTitle={"photo"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                showTitle={"name"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"inStockQty"}
                showTitle={"stock"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                showTitle={"price"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th fontSize={"lg"}>
              <SortableHeader
                sortBy={sortingBy}
                keyTitle={"createdAt"}
                showTitle={"created at"}
                activeSorting={activeSorting}
              />
            </Th>
            <Th>actions</Th>
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
                #{product.id}
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                <AspectRatio maxW={24} ratio={1} flexShrink={0}>
                  <Image
                    src={product.image}
                    alt={product.description}
                    objectFit={"cover"}
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                {product.name}
              </Td>
              <Td
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
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
                textAlign={"center"}
                className="peer-has-[:checked]:bg-red-200"
                fontSize={"md"}
              >
                {`$${product.price}`}
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
