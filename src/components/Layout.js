import React from "react";
import { GlobalStyles } from "twin.macro";
import "./index.css";
const Layout = ({ children, ...rest }) => (
  <div {...rest} className="h-screen">
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
