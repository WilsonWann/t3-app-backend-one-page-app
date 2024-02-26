import React, { ReactElement } from "react";
import RootLayout from "~/components/rootLayout";
import PageLayout from "~/components/pageLayout";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";

type Props = {};

const ProductItemPage: NextPageWithLayout = (props: Props) => {
  const router = useRouter();
  return <p>Product Id:{router.query.productId}</p>;
};

ProductItemPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <PageLayout>{page}</PageLayout>
    </RootLayout>
  );
};

export default ProductItemPage;
