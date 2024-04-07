import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Shade({ children }: Props) {
  return <div className="shade">
    {children}
  </div>;
}
