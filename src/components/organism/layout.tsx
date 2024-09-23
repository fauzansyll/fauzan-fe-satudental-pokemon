import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { LayoutProps } from "@/lib/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
