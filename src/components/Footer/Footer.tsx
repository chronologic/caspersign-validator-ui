import React from "react";
import styled from "styled-components";
import { Layout, Typography, Divider } from "antd";

const { Text, Link } = Typography;

function Footer() {
  return (
    <Layout.Footer>
      <FooterContent>
        <Divider />
        <Text>
          Powered by{" "}
          <Link href="https://casperlabs.io/" target="_blank">
            CasperLabs
          </Link>
        </Text>
      </FooterContent>
    </Layout.Footer>
  );
}

const FooterContent = styled.div`
  width: 100%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export default Footer;
