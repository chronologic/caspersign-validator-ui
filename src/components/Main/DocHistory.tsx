import React, { useMemo } from "react";
import { Layout, Typography, Card, Avatar, List } from "antd";
import { getGravatarUrl } from "react-awesome-gravatar";
import styled from "styled-components";

import { DocumentHistory } from "../../types";
import { formatDate } from "../../utils";
import CasperTx from "./CasperTx";

const { Text } = Typography;

interface IHistoryRow {
  title: string;
  email: string;
  description: React.ReactNode;
}

interface IProps {
  history: DocumentHistory[];
}

function DocHistory({ history }: IProps) {
  const items: IHistoryRow[] = useMemo(() => {
    return history.map((h) => {
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
          <div>
            <Text key="tx" type="secondary">
              Tx Hash: <CasperTx txHash={h.txHash} />
            </Text>
          </div>
        );
      }

      const item: IHistoryRow = {
        title: h.description,
        email: h.email,
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
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      size="large"
                      src={getGravatarUrl(item.email || "", {
                        default: "mp",
                        size: 50,
                      })}
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
`;

export default DocHistory;
