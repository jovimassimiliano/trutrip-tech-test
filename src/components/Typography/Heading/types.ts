import { HeadingVariantProps } from "./styles";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
} & HeadingVariantProps;
