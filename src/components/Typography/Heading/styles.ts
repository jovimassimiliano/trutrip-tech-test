import { VariantProps, cva } from "class-variance-authority";

export const headingVariants = cva("font-semibold", {
  variants: {
    variant: {
      h1: ["text-6xl"],
      h2: ["text-5xl"],
      h3: ["text-3xl"],
      h4: ["text-2xl"],
      h5: ["text-xl"],
      h6: ["text-lg"],
    },
    color: {
      main: "text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    color: "main",
  },
});

export type HeadingVariantProps = VariantProps<typeof headingVariants>;
