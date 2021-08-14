import React from "react";
import { GlobalStyles } from "twin.macro";
import "./index.css";
const Layout = ({ children, ...rest }) => (
  <div {...rest} className="h-screen h-auto">
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
