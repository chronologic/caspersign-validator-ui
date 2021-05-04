import React, { useMemo } from "react";
import { Layout, Typography, Card, Tag, List } from "antd";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { SignatureDetails } from "../../types";
import { formatDate } from "../../utils";
import CasperTx from "./CasperTx";

const { Text } = Typography;

interface IRow {
  id: number;
  title: string;
  description: React.ReactNode;
}

interface IProps {
  originalHash: string;
  hashes: string[];
  signatures: SignatureDetails[];
}

function DocBlockchain({ originalHash, hashes, signatures }: IProps) {
  const lastBlockchainSignature = useMemo(() => {
    const lastHistoryItem = signatures
      .filter((s) => !!s.txHash && !!s.signedAt)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .sort((a, b) => a.signedAt!.localeCompare(b.signedAt!))[0];

    return lastHistoryItem;
  }, [signatures]);
  const lastDocHash = useMemo(() => {
    return hashes.reverse()[0] || "";
  }, [hashes]);
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
    if (lastBlockchainSignature && lastBlockchainSignature.signedAt) {
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
    if (originalHash) {
      rows.push({
        id: 1,
        title: "Original Document Hash:",
        description: originalHash,
      });
    }
    if (lastDocHash) {
      rows.push({
        id: 2,
        title: "Signed Document Hash:",
        description: lastDocHash,
      });
    }
    if (lastBlockchainSignature) {
      rows.push({
        id: 3,
        title: "Blockchain Hash:",
        description: <CasperTx txHash={lastBlockchainSignature.txHash} />,
      });
    }

    return rows;
  }, [lastBlockchainSignature, lastDocHash, originalHash]);

  return (
    <Layout>
      <Card title="Blockchain" extra={verifiedTag}>
        <Content>
          <List
            itemLayout="horizontal"
            dataSource={items}
            rowKey="id"
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  key={item.id}
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
