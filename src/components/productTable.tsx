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
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdMoreHoriz,
} from "react-icons/md";

type Props = {
  filteredProducts: ProductType[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const ProductTable = (props: Props) => {
  const { filteredProducts, setFilteredProducts } = props;

  const [activeSorting, setActiveSorting] = React.useState("");

  const [isIdAsc, setIsIdAsc] = React.useState(true);
  const [isPhotoAsc, setIsPhotoAsc] = React.useState(true);
  const [isNameAsc, setIsNameAsc] = React.useState(true);
  const [isStockAsc, setIsStockAsc] = React.useState(true);
  const [isPriceAsc, setIsPriceAsc] = React.useState(true);
  const [isCreatedAtAsc, setIsCreatedAtAsc] = React.useState(true);

  const [checkedItems, setCheckedItems] = React.useState(
    Array(filteredProducts.length).fill(false),
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const onParentCheckBoxClick = (checked: boolean) => {
    setCheckedItems(Array(filteredProducts.length).fill(checked));
  };

  const onCheckBoxClick = (checked: boolean, index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  const sortById = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isIdAsc ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id),
      ),
    );
    setIsIdAsc((prevState) => !prevState);
    setActiveSorting("id");
  };
  const sortByPhoto = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isPhotoAsc
          ? b.image.localeCompare(a.image)
          : a.image.localeCompare(b.image),
      ),
    );

    setIsPhotoAsc((prevState) => !prevState);
    setActiveSorting("photo");
  };
  const sortByName = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isNameAsc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name),
      ),
    );

    setIsNameAsc((prevState) => !prevState);
    setActiveSorting("name");
  };
  const sortByStock = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isStockAsc ? b.inStockQty - a.inStockQty : a.inStockQty - b.inStockQty,
      ),
    );

    setIsStockAsc((prevState) => !prevState);
    setActiveSorting("stock");
  };
  const sortByPrice = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isPriceAsc ? b.price - a.price : a.price - b.price,
      ),
    );

    setIsPriceAsc((prevState) => !prevState);
    setActiveSorting("price");
  };
  const sortByCreatedAt = () => {
    setFilteredProducts(
      filteredProducts.sort((a, b) =>
        isCreatedAtAsc
          ? b.createdAt.localeCompare(a.createdAt)
          : a.createdAt.localeCompare(b.createdAt),
      ),
    );

    setIsCreatedAtAsc((prevState) => !prevState);
    setActiveSorting("createdAt");
  };

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      calendar: "ko-KR",
    };
    const dateFormat = new Intl.DateTimeFormat("ko-KR");
    return dateFormat.format(date);
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
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isIdAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortById}
                textTransform={"uppercase"}
                isActive={"id" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                id
              </Button>
            </Th>
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isPhotoAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortByPhoto}
                textTransform={"uppercase"}
                isActive={"photo" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                photo
              </Button>
            </Th>
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isNameAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortByName}
                textTransform={"uppercase"}
                isActive={"name" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                name
              </Button>
            </Th>
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isStockAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortByStock}
                textTransform={"uppercase"}
                isActive={"stock" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                stock
              </Button>
            </Th>
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isPriceAsc ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortByPrice}
                textTransform={"uppercase"}
                isActive={"price" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                price
              </Button>
            </Th>
            <Th fontSize={"lg"}>
              <Button
                rightIcon={
                  isCreatedAtAsc ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )
                }
                variant={"ghost"}
                colorScheme={"orange"}
                color={"black"}
                onClick={sortByCreatedAt}
                textTransform={"uppercase"}
                isActive={"createdAt" === activeSorting}
                className="[&>span]:opacity-0 [&>span]:hover:opacity-100 [&>span]:data-[active]:opacity-100"
              >
                created at
              </Button>
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
                <Checkbox
                  isChecked={checkedItems[index]}
                  onChange={(e) => onCheckBoxClick(e.target.checked, index)}
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
