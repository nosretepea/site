import React from "react";
import GlobalContextProvider from "../util/globalContext";
import PageWrapper from "./pageWrapper";
import SEO from "./seo";
import DisplayModeButton from "./displayModeButton";

const Layout = ({ children }) => {
  return (
    <GlobalContextProvider>
      <SEO />
      <PageWrapper>
        <div className="absolute right-0 px-4 py-2">
          <DisplayModeButton />
        </div>
        {children}
      </PageWrapper>
    </GlobalContextProvider>
  );
}

export default Layout;