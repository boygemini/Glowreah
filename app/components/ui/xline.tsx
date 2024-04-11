import React from "react";
import { cn } from "./../../../lib/utils";

type Props = {
  className?: string;
};

const Xline = ({ className }: Props) => {
  className = `${className} w-full border-dashed border-gray-400 my-4`;
  return <hr className={cn(className)} />;
};

export default Xline;
