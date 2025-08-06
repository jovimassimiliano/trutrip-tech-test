import { VariantProps } from "class-variance-authority";

import { badgeVariants } from "./styles";

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };
