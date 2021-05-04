import React from "react";
import styled from "styled-components";
import { Layout, Typography, Space, Button } from "antd";
import { skyblue } from "../colors";

const { Title, Text } = Typography;

function DocFailed() {
  return (
    <Layout>
      <Main>
        <HeaderTitle>
          <Space direction="vertical">
            <Title level={4}>
              We could not verify the validity of this document
            </Title>
            <Text>This could happen for one of the following reasons:</Text>
            <Text type="secondary">
              <ul>
                <li>
                  <p>Document has been tampered</p>
                </li>
                <li>
                  <p>Document has not been created using CasperSign</p>
                </li>
                <li>
                  <p>An unexpected error occurred while uploading</p>
                </li>
              </ul>
            </Text>
            <Button
              type="primary"
              size="large"
              style={{
                margin: "20px 0 0 0",
                padding: "0 35px",
                background: skyblue,
                borderColor: skyblue,
              }}
              href="/"
            >
              Try again
            </Button>
          </Space>
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

export default DocFailed;
