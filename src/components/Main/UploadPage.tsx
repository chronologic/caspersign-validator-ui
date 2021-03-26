import React from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";

const { Title } = Typography;

function UploadPage() {
  return (
    <Layout>
      <Main>
        <HeaderTitle>
          <Title level={4}>Upload</Title>
        </HeaderTitle>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  width: 100%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderTitle = styled.div`
  margin: 64px 0 12px;
`;

export default UploadPage;
