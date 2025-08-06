import { cn } from "@/lib/utils";

import { TextProps } from "./types";
import textVariants from "./styles";

const Text = ({
  className,
  color,
  size,
  weight,
  children,
  ...props
}: TextProps) => {
  const variants = {
    color,
    size,
    weight,
  };

  return (
    <p {...props} className={cn(textVariants(variants), className)}>
      {children}
    </p>
  );
};

export default Text;
