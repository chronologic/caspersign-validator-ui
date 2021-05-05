import React, { useCallback } from "react";
import styled from "styled-components";
import { Layout, Space } from "antd";

import logo from "../../img/logo.svg";
import FlexSpacer from "../FlexSpacer";

function Header() {
  const handleClick = useCallback(() => {
    window.location.href = window.location.origin;
  }, []);

  return (
    <Layout.Header>
      <HeaderContent>
        <Space>
          <Logo onClick={handleClick}>
            <img src={logo} alt="logo" />
          </Logo>
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
