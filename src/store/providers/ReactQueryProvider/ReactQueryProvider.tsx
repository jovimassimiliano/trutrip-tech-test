"use client";

import { PropsWithChildren, useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
// import { toast } from "react-toastify";

type Error = {
  response: {
    data: {
      message: string;
    };
  };
};

const onErrorHandler = (error: unknown) => {
  const errorMessage = (error as Error)?.response?.data?.message;

  // if (errorMessage) {
  //   toast.error(errorMessage);
  // }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
  queryCache: new QueryCache({
    onError: onErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: onErrorHandler,
  }),
});

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClientConfig] = useState(() => queryClient);
  return (
    <QueryClientProvider client={queryClientConfig}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
