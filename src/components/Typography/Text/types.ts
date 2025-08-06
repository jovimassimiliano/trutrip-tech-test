import { VariantProps } from "class-variance-authority";
import textVariants from "./styles";

export type TextVariant = VariantProps<typeof textVariants>;
export type TextProps = React.ComponentProps<"p"> & TextVariant;
