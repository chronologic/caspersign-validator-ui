import React, { useMemo } from "react";
import { Layout, Typography, Card, Avatar, List } from "antd";
import styled from "styled-components";

import { DocumentHistory } from "../../types";
import { formatDate, getGravatarUrl } from "../../utils";
import CasperTxCopyInput from "./CasperTxCopyInput";

const { Text } = Typography;

interface IHistoryRow {
  id: number;
  title: string;
  email: string;
  recipientEmail: string;
  description: React.ReactNode;
}

interface IProps {
  history: DocumentHistory[];
}

function DocHistory({ history }: IProps) {
  const items: IHistoryRow[] = useMemo(() => {
    return history.map((h, i) => {
      const description = [];

      if (h.timestamp) {
        description.push(
          <div>
            <Text key="timestamp" type="secondary">
              Timestamp: {formatDate(h.timestamp)}
            </Text>
          </div>
        );
      }
      if (h.ip) {
        description.push(
          <div>
            <Text key="ip" type="secondary">
              IP: {h.ip}
            </Text>
          </div>
        );
      }
      if (h.txHash) {
        description.push(
          <div className="txContainer">
            <Text key="tx" type="secondary">
              Tx Hash:
            </Text>
            <CasperTxCopyInput className="tx" txHash={h.txHash} />
          </div>
        );
      }

      const item: IHistoryRow = {
        id: i,
        title: h.description,
        email: h.email,
        recipientEmail: h.recipientEmail,
        description,
      };

      return item;
    });
  }, [history]);

  return (
    <Layout>
      <Card title="History">
        <Content>
          <List
            itemLayout="horizontal"
            dataSource={items}
            rowKey="id"
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  key={item.id}
                  avatar={
                    <Avatar
                      size="large"
                      src={getGravatarUrl(item.recipientEmail, 50)}
                    />
                  }
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
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

  .txContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .tx {
    flex-grow: 1;
    margin-left: 8px;
  }
  .casperTx {
    width: 100%;
  }
`;

export default DocHistory;
