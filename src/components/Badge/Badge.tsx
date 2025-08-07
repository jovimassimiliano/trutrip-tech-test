import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/classname";
import { badgeVariants } from "./styles";
import { BadgeProps } from "./types";

const Badge = ({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};

export default Badge;
