import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Content({ children }: Props) {
  return (
    <div className="container">
      <div className="page animate">{children}</div>
    </div>
  );
}

export default Content;
