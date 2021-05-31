import React from "react";
import styled from "styled-components";
import { Layout, Space } from "antd";

import logo from "../../img/logo.svg";
import FlexSpacer from "../FlexSpacer";

function Header() {
  return (
    <Layout.Header>
      <HeaderContent>
        <Space>
          <a href={window.location.origin}>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </a>
        </Space>
        <FlexSpacer />
      </HeaderContent>
    </Layout.Header>
  );
}

const Logo = styled.div`
  width: 150px;
  cursor: pointer;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export default Header;
