import React, { type ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import type { NextPageWithLayout } from "../_app";

const ProductCreatePage: NextPageWithLayout = () => {
  return <p>ProductCreatePage</p>;
};

ProductCreatePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default ProductCreatePage;
