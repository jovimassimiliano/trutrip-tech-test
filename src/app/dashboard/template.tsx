import { PropsWithChildren } from "react";
import { DashboardProvider } from "./context";

const Template = ({ children }: PropsWithChildren) => {
  return <DashboardProvider>{children}</DashboardProvider>;
};

export default Template;
