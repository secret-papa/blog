import React, { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type QueryWrapperProps = {
  children: ReactNode;
};

const QueryWrapper = ({ children }: QueryWrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryWrapper;
