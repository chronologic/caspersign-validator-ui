import React from "react";
import { Layout, Row, Col, Space } from "antd";

function Footer() {
  return (
    <Layout.Footer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical" />
        </Col>
      </Row>
    </Layout.Footer>
  );
}

export default Footer;
