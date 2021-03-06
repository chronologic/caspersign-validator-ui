import React from "react";
import { Typography } from "antd";

const { Link } = Typography;

interface IProps {
  txHash: string;
}

function CasperTx({ txHash }: IProps) {
  return (
    <Link href={`https://cspr.live/deploy/${txHash}`} target="_blank">
      {txHash}
    </Link>
  );
}

export default CasperTx;
