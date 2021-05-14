import React from "react";
import { QueryParamProvider } from "use-query-params";

import { PostSignProvider } from "../../contexts";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => (
  <QueryParamProvider>
    <PostSignProvider>{children}</PostSignProvider>
  </QueryParamProvider>
);

export default Providers;
