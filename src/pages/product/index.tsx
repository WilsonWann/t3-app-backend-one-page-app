import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";

type Props = {};

const ProductPage: NextPageWithLayout = (props: Props) => {
  return <p>ProductPage</p>;
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default ProductPage;
