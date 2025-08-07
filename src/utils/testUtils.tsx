
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import ReactQueryProvider from "@/store/providers/ReactQueryProvider";


export const renderComponent = (ui: ReactElement, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    ),
    ...options,
  });
};
