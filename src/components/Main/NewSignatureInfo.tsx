/* eslint-disable react/require-default-props */
import { InfoCircleOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";
import styled from "styled-components";

import { MINUTE_MILLIS } from "../../constants";
import { skyblue } from "../colors";

interface IProps {
  signedAt: string;
  className?: string;
}

export default function NewSignatureInfo({ signedAt, className }: IProps) {
  const isNewSignature = useMemo(() => {
    const THRESHOLD = 5 * MINUTE_MILLIS;
    const now = new Date().getTime();
    return now - new Date(signedAt).getTime() < THRESHOLD;
  }, [signedAt]);

  if (!isNewSignature) {
    return null;
  }

  return (
    <Content className={className}>
      <InfoCircleOutlined /> Please allow up to 5 minutes for the transaction to
      appear on the blockchain explorer
    </Content>
  );
}

const Content = styled.div`
  padding-top: 4px;
  font-style: italic;
  font-size: 12px;

  .anticon {
    margin-right: 4px;
    color: ${skyblue};
  }
`;
