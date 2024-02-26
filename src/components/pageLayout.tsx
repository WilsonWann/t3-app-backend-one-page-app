import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <div className="box-siz box-border flex h-full w-auto items-center justify-center overflow-auto border-[1rem] border-white bg-white text-xl text-white">
      {props.children}
    </div>
  );
};

export default PageLayout;
