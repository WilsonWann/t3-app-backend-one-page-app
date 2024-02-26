import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-center overflow-auto border-[1.5rem] border-r-0 border-white bg-white text-xl text-white">
      {props.children}
    </div>
  );
};

export default PageLayout;
