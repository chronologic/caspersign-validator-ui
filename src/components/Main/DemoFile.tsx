import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const examplePdf = require("./caspersign_example.pdf").default;

const { Title } = Typography;

function DemoFile() {
  return (
    <Content>
      <Title level={5}>
        Want to see the validator in action but you don&apos;t have a file to
        try it with?
      </Title>
      <div className="download">
        Download a{" "}
        <a href={`${examplePdf}?download=1`} download="caspersign_example.pdf">
          sample file <DownloadOutlined />
        </a>{" "}
        and drop it in the area above
      </div>
      <div className="link">
        or{" "}
        <a href="/?hash=799052832c12cd7ff82efa4a0d09766baad587ddc6b12174578e3af8f0e97099">
          click here <LinkOutlined />
        </a>{" "}
        to go directly to details of the validated file
      </div>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  padding: 32px 16px;

  .download,
  .link {
    margin: 8px;
  }
`;

export default DemoFile;
