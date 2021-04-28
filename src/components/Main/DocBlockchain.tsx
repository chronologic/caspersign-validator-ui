import React, { useMemo } from "react";
import { Layout, Typography, Card, Tag, List } from "antd";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { SignatureDetails } from "../../types";
import { formatDate } from "../../utils";

const { Text } = Typography;

interface IRow {
  title: string;
  description: React.ReactNode;
}

interface IProps {
  hashes: string[];
  signatures: SignatureDetails[];
}

function DocBlockchain({ hashes, signatures }: IProps) {
  const lastBlockchainSignature = useMemo(() => {
    const lastHistoryItem = signatures
      .filter((s) => !!s.txHash)
      .sort((a, b) => a.signedAt.localeCompare(b.signedAt))[0];

    return lastHistoryItem;
  }, [signatures]);
  const firstDocHash = useMemo(() => {
    return hashes[0] || "";
  }, [hashes]);
  const lastDocHash = useMemo(() => {
    const last = hashes.reverse()[0] || "";
    if (firstDocHash === last) {
      return "";
    }
    return last;
  }, [hashes, firstDocHash]);
  const verifiedTag = useMemo(() => {
    if (lastBlockchainSignature) {
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          BLOCKCHAIN VERIFIED
        </Tag>
      );
    }
    return (
      <Tag icon={<WarningOutlined />} color="orange">
        AWAITING BLOCKCHAIN VERIFICATION
      </Tag>
    );
  }, [lastBlockchainSignature]);
  const footer = useMemo(() => {
    if (lastBlockchainSignature) {
      return (
        <Text type="secondary">
          Timestamped on Blockchain:{" "}
          {formatDate(lastBlockchainSignature.signedAt)}
        </Text>
      );
    }
    return null;
  }, [lastBlockchainSignature]);

  const items: IRow[] = useMemo(() => {
    const rows: IRow[] = [];
    if (firstDocHash) {
      rows.push({
        title: "Original Document Hash:",
        description: firstDocHash,
      });
    }
    if (lastDocHash) {
      rows.push({
        title: "Signed Document Hash:",
        description: lastDocHash,
      });
    }
    if (lastBlockchainSignature) {
      rows.push({
        title: "Blockchain Hash:",
        description: lastBlockchainSignature.txHash,
      });
    }

    return rows;
  }, [lastBlockchainSignature, firstDocHash, lastDocHash]);

  return (
    <Layout>
      <Card title="Blockchain" extra={verifiedTag}>
        <Content>
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
            footer={footer}
          />
        </Content>
      </Card>
    </Layout>
  );
}

const Content = styled.div`
  .ant-list-item-meta-description {
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default DocBlockchain;
