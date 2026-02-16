"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";
interface IReactQueryProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const ReactQueryProvider: FC<IReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
