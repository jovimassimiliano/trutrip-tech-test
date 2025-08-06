import { cn } from "@/lib/utils";
import { headingVariants } from "./styles";
import { HeadingProps } from "./types";

const Heading = ({
  variant,
  className,
  color,
  children,
  ...props
}: HeadingProps) => {
  const headingVariant = {
    variant,
    color,
  };
  switch (variant) {
    case "h1":
      return (
        <h1
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h3
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h3>
      );
    case "h3":
      return (
        <h3
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          {...props}
          className={cn(headingVariants(headingVariant), className)}
        >
          {children}
        </h6>
      );
  }
};

export default Heading;
