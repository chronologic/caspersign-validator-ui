import React, { useMemo } from "react";
import { Layout, Typography, Card, Avatar, List } from "antd";
import { getGravatarUrl } from "react-awesome-gravatar";

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
          <Text key="timestamp" type="secondary">
            Timestamp: ${formatDate(h.timestamp)}
          </Text>
        );
      }
      if (h.ip) {
        description.push(
          <Text key="ip" type="secondary">
            IP: ${h.ip}
          </Text>
        );
      }
      if (h.txHash) {
        description.push(
          <Text key="tx" type="secondary">
            Tx Hash: <CasperTx txHash={h.txHash} />
          </Text>
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
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    src={getGravatarUrl(item.email, {
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
      </Card>
    </Layout>
  );
}

export default DocHistory;
