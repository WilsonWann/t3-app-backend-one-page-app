import React, { type ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import type { NextPageWithLayout } from "../_app";

const OrderPage: NextPageWithLayout = () => {
  return <p>OrderPage</p>;
};

OrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default OrderPage;
