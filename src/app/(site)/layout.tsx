"use client";
import { LayoutSite } from "@/widgets/layout";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default Layout;
