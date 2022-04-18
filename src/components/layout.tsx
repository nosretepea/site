import React, { ReactElement, ReactNode } from "react";
import GlobalContextProvider from "../util/globalContext";
import PageWrapper from "./pageWrapper";
import Seo from "./seo";
import DisplayModeButton from "./displayModeButton";

const Layout: React.FC<any> = ({ children }): ReactElement => {
  return (
    <GlobalContextProvider>
      <Seo />
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