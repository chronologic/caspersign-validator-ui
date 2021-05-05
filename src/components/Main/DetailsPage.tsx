import React from "react";
import styled from "styled-components";
import { Layout, Row, Col, Typography } from "antd";

import { DocumentDetails } from "../../types";
import DocHistory from "./DocHistory";
import DocSigners from "./DocSigners";
import DocBlockchain from "./DocBlockchain";
import DocTitle from "./DocTitle";
import DateInfo from "./DateInfo";

const { Title } = Typography;

interface IProps {
  filename: string;
  doc: DocumentDetails;
}

function DetailsPage({ filename, doc }: IProps) {
  return (
    <Layout>
      <Main>
        <HeaderTitle>
          <Title level={4}>Document Details</Title>
        </HeaderTitle>
        <DocTitle
          filename={filename}
          createdByName={doc.createdByName}
          createdByEmail={doc.createdByEmail}
          documentUid={doc.documentUid}
        />
        <Row gutter={24}>
          <Col flex={3}>
            <DocSigners signatures={doc.signatures} />
            <DocHistory history={doc.history} />
          </Col>
          <Col flex={2}>
            <DocBlockchain
              originalHash={doc.originalHash}
              hashes={doc.hashes}
              signatures={doc.signatures}
            />
            <DateInfo />
          </Col>
        </Row>
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

export default DetailsPage;
