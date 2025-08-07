import { cn } from "@/utils/classname";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-400 dark:bg-slate-800",
        className,
      )}
      {...props}
    />
  );
};

export default Skeleton;
