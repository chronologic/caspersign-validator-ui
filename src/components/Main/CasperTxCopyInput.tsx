/* eslint-disable react/require-default-props */
import React, { useCallback } from "react";
import styled from "styled-components";

import { skyblue } from "../colors";
import CopyInput from "./CopyInput";

interface IProps {
  txHash: string;
  className?: string;
}

export default function CasperTxCopyInput({ txHash, className }: IProps) {
  const handleClick = useCallback(() => {
    window.open(`https://cspr.live/deploy/${txHash}`, "_blank");
  }, [txHash]);

  return (
    <Content className={className}>
      <CopyInput
        value={txHash}
        className="casperTx"
        inputTitle="Click to see transaction details"
        onClick={handleClick}
      />
    </Content>
  );
}

const Content = styled.div`
  display: inline-block;

  .casperTx .ant-input {
    cursor: pointer;
    color: ${skyblue};
  }
`;
