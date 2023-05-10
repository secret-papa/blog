import React, { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

type QueryWrapperProps = {
  element: ReactNode;
};

const QueryWrapper = ({ element }: QueryWrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {element}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default QueryWrapper;
