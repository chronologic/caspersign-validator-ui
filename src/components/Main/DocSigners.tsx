import React from "react";
import { Layout, Card, Timeline, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import hellogreen from "../../img/hellogreen.svg";
import helloblack from "../../img/helloblack.svg";
import caspergreen from "../../img/caspergreen.svg";
import casperblack from "../../img/casperblack.svg";
import { SignatureDetails } from "../../types";
import Signer from "./Signer";

interface IProps {
  signatures: SignatureDetails[];
}

function DocSigners({ signatures }: IProps) {
  const items = signatures.map((sig) => {
    const isSignedOnChain = !!sig.txHash;
    const isHsSigned = sig.hs.statusCode === "signed";
    const signerRole = sig.hs.isOwner ? "Creator" : "Signer";
    const signer = `${sig.hs.name} (${signerRole})`;
    const email = sig.hs.email || sig.email;

    return (
      <Timeline.Item
        dot={
          isSignedOnChain ? undefined : (
            <ClockCircleOutlined className="timeline-clock-icon" />
          )
        }
        color={isSignedOnChain ? "green" : "gray"}
      >
        <Signer email={email} title={signer} description={email}>
          {isHsSigned ? (
            <Tag
              icon={
                <img src={hellogreen} className="tag-icon" alt="hellogreen" />
              }
              color="success"
            >
              SIGNED
            </Tag>
          ) : (
            <Tag
              icon={
                <img src={helloblack} className="tag-icon" alt="helloblack" />
              }
              color="default"
            >
              AWAITING SIGN
            </Tag>
          )}
          {isSignedOnChain ? (
            <Tag
              icon={
                <img src={caspergreen} className="tag-icon" alt="caspergreen" />
              }
              color="success"
            >
              SIGNED
            </Tag>
          ) : (
            <Tag
              icon={
                <img src={casperblack} className="tag-icon" alt="casperblack" />
              }
              color="default"
            >
              AWAITING SIGN
            </Tag>
          )}
        </Signer>
      </Timeline.Item>
    );
  });

  return (
    <Layout>
      <Card title="Signers">
        <Timeline>{items}</Timeline>
      </Card>
    </Layout>
  );
}

export default DocSigners;
