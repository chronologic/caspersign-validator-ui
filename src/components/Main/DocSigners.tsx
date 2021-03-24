import React from "react";
import { Layout, Card, Timeline, Avatar, Row, Col, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import hellogreen from "../../img/hellogreen.svg";
import helloblack from "../../img/helloblack.svg";
import caspergreen from "../../img/caspergreen.svg";
import casperblack from "../../img/casperblack.svg";

const { Meta } = Card;

function Signers() {
  return (
    <Layout>
      <Card title="Signers">
        <Timeline>
          <Timeline.Item color="green">
            <Row gutter={48}>
              <Col>
                <Meta
                  avatar={
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHan8MKDDbG8w/profile-displayphoto-shrink_400_400/0/1562011727476?e=1622073600&v=beta&t=r6Rq9MeuNbOAdzT5a-9pbbD3GzEnjhneg7LSv1Pdzj4" />
                  }
                  title="Clifford Sarkin (Creator)"
                  description="cliff@casperlabs.io"
                />
              </Col>
              <Col>
                <Tag
                  icon={
                    <img src={hellogreen} className="tag-icon" alt="mail" />
                  }
                  color="success"
                >
                  SIGNED
                </Tag>
                <Tag
                  icon={
                    <img src={caspergreen} className="tag-icon" alt="mail" />
                  }
                  color="success"
                >
                  SIGNED
                </Tag>
              </Col>
            </Row>
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined className="timeline-clock-icon" />}
            color="gray"
          >
            <Row gutter={48}>
              <Col>
                <Meta
                  avatar={
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHVQf5edhvWUw/profile-displayphoto-shrink_400_400/0/1554754824709?e=1622073600&v=beta&t=XEjTfTGHW8njxWw5jvoHquvYm110IdDiEkD6_8tXjWA" />
                  }
                  title="Mrinal Manohar (Signer)"
                  description="mrinal@casperlabs.io"
                />
              </Col>
              <Col>
                <Tag
                  icon={
                    <img src={hellogreen} className="tag-icon" alt="mail" />
                  }
                  color="success"
                >
                  SIGNED
                </Tag>
                <Tag
                  icon={
                    <img src={casperblack} className="tag-icon" alt="mail" />
                  }
                  color="default"
                >
                  AWAITING SIGN
                </Tag>
              </Col>
            </Row>
          </Timeline.Item>
        </Timeline>
      </Card>
    </Layout>
  );
}

export default Signers;
