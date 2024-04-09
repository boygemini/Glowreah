import React from "react";

type Props = {
  children: React.ReactElement;
  className: string;
};

export default function Shade({ children, className }: Props) {
  className = `shade ${className}`;
  return <div className={className}>{children}</div>;
}
