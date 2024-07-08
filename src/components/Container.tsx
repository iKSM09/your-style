import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(["px-6 pb-4", className])}>{children}</div>;
};

export default Container;
