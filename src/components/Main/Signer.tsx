import React, { useMemo } from "react";
import { Card, Avatar, Row, Col } from "antd";

import { getGravatarUrl } from "../../utils";

const { Meta } = Card;

interface IProps {
  email: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}

function Signer({ email, title, description, children }: IProps) {
  const gravatarUrl = useMemo(() => {
    return getGravatarUrl(email, 50);
  }, [email]);

  return (
    <Row gutter={48}>
      <Col>
        <Meta
          avatar={<Avatar src={gravatarUrl} />}
          title={title}
          description={description}
        />
      </Col>
      <Col>{children}</Col>
    </Row>
  );
}

export default Signer;
