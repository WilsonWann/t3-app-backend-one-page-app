import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";
import {
  Box,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {};

const DashboardPage: NextPageWithLayout = (props: Props) => {
  return (
    <Grid
      templateColumns="repeat(3, 20rem)"
      autoRows={"20rem"}
      gap={6}
      h="100%"
      w={"auto"}
      className="*:border-4-orange-200 *:flex *:items-center *:justify-center *:rounded-xl *:bg-orange-400"
    >
      <Box gridRow={1} gridColumnStart={1} gridColumnEnd={3}>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth={"1px"}
          rounded={"md"}
        >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
            13 days ago
          </Box>
          <Heading size="md" my="2">
            <LinkOverlay href="/product" as={NextLink}>
              New Year, New Beginnings: Smashing Workshops & Audits
            </LinkOverlay>
          </Heading>
          <Text>
            Catch up on what’s been cookin’ at Smashing and explore some of the
            most popular community resources.
          </Text>
        </LinkBox>
      </Box>
      <Box>2</Box>
      <Box gridRowStart={2} gridRowEnd={4} gridColumn={1}>
        3
      </Box>
      <Box
        gridRowStart={2}
        gridRowEnd={2}
        gridColumnStart={2}
        gridColumnEnd={4}
      >
        <TableContainer>
          <Table variant="striped" colorScheme={"blackAlpha"}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
      <Box>5</Box>
      <Box
        gridRowStart={3}
        gridRowEnd={5}
        gridColumnStart={2}
        gridColumnEnd={4}
      >
        6
      </Box>
      <Box gridRow={5} gridColumnStart={1} gridColumnEnd={3}>
        7
      </Box>
      <Box>8</Box>
    </Grid>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default DashboardPage;
