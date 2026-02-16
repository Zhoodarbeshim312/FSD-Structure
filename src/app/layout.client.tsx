"use client";
import { FC, ReactNode } from "react";
import ReactQueryProvider from "./providers/ReactQueryProvider";
interface ILayoutQueryProviderProps {
  children: ReactNode;
}
const LayoutClient: FC<ILayoutQueryProviderProps> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
export default LayoutClient;
