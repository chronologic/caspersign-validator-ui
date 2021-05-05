import React, { useMemo } from "react";
import { Layout, Card, Typography, Divider } from "antd";
import styled from "styled-components";
import pdf from "../../img/pdf.svg";

const { Title, Text } = Typography;

interface IProps {
  filename: string;
  createdByName: string;
  createdByEmail: string;
  documentUid: string;
}

function DocTitle({
  filename,
  createdByName,
  createdByEmail,
  documentUid,
}: IProps) {
  const createdBy = createdByName
    ? `${createdByName} (${createdByEmail})`
    : `${createdByEmail}`;

  return (
    <Layout>
      <Card>
        <DocHeader>
          <CircleIcon>
            <img src={pdf} alt="pdf" />
          </CircleIcon>
          <div>
            <Title level={4}>{filename}</Title>
            <Text type="secondary">Created By: {createdBy}</Text>
            <Divider type="vertical" />
            <Text type="secondary">Document ID: {documentUid}</Text>
          </div>
        </DocHeader>
      </Card>
    </Layout>
  );
}

const CircleIcon = styled.div`
  width: 53px;
  margin-right: 25px;
`;

const DocHeader = styled.div`
  display: flex;
`;

export default DocTitle;
