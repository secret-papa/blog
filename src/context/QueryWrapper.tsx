import React, { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

type QueryWrapperProps = {
  children: ReactNode;
};

const QueryWrapper = ({ children }: QueryWrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default QueryWrapper;
