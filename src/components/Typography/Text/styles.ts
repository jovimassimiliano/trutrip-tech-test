import { cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    color: {
      main: "text-primary",
      secondary: "text-secondary",
      danger: "text-destructive",
    },
    size: {
      xsmall: "text-xs",
      small: "text-sm",
      medium: "text-base",
      large: "text-2xl",
    },
    weight: {
      semibold: "font-semibold",
      normal: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    color: "main",
    size: "medium",
    weight: "normal",
  },
});

export default textVariants;
