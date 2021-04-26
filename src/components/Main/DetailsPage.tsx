import React, { useMemo } from "react";
import styled from "styled-components";
import { Layout, Row, Col, Typography } from "antd";

import { DocumentDetails } from "../../types";
import DocHistory from "./DocHistory";
import DocSigners from "./DocSigners";
import DocBlockchain from "./DocBlockchain";
import DocTitle from "./DocTitle";

const { Title } = Typography;

interface IProps {
  filename: string;
  doc: DocumentDetails;
}

function DetailsPage({ filename, doc }: IProps) {
  const createdBy = useMemo(() => {
    let creator = doc?.createdByEmail;
    // eslint-disable-next-line no-restricted-syntax
    for (const sig of doc?.signatures || []) {
      if (sig.email === creator || sig.hs.email === creator) {
        creator = sig.hs.name || sig.name || creator;
        break;
      }
    }
    return creator;
  }, [doc]);

  return (
    <Layout>
      <Main>
        <HeaderTitle>
          <Title level={4}>Document Details</Title>
        </HeaderTitle>
        <DocTitle
          filename={filename}
          createdBy={createdBy}
          documentUid={doc.documentUid}
        />
        <Row gutter={24}>
          <Col flex={3}>
            <DocSigners signatures={doc.signatures} />
            <DocHistory history={doc.history} />
          </Col>
          <Col flex={2}>
            <DocBlockchain hashes={doc.hashes} signatures={doc.signatures} />
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
