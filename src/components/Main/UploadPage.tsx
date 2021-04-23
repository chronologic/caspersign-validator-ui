import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Spin, Layout, Typography, Upload, Card } from "antd";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";

import { skyblue } from "../colors";

const { Title, Text } = Typography;
const { Dragger } = Upload;
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: `${skyblue}` }} spin />
);

interface IProps {
  onUploadDone: (hash: string, filename: string) => void;
}

function UploadPage({ onUploadDone }: IProps) {
  const [loading, setLoading] = useState(false);
  // const handleChange = useCallback(
  //   (info: UploadChangeParam) => {
  //     const { status } = info.file;
  //     setLoading(status === "uploading");
  //     if (status === "done") {
  //       message.success(`${info.file.name} uploaded successfully.`);
  //       onUploadDone();
  //     } else if (status === "error") {
  //       message.error(`${info.file.name} upload failed.`);
  //     }
  //   },
  //   [onUploadDone]
  // );
  const handleCustomRequest = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async ({ file, onSuccess, onError }: any) => {
      setLoading(true);
      try {
        const hash = await sha256(file);
        onSuccess(hash);
        onUploadDone(hash, (file as File).name);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        onError(e);
      } finally {
        setLoading(false);
      }
    },
    [onUploadDone]
  );

  return (
    <Layout>
      <Main>
        <HeaderTitle>
          <Title level={4}>
            Verify the authenticity of your signed document
          </Title>
          <Text type="secondary">
            We&#39;ll detect if the document has been modified after it was
            signed.
          </Text>
        </HeaderTitle>
        <Card>
          <Dragger
            name="file"
            accept="application/pdf"
            showUploadList
            action=""
            customRequest={handleCustomRequest}
            // onChange={handleChange}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Upload a Signed Document Here</p>
            <p className="ant-upload-hint">
              Upload or drop your signed document here in the dropzone for
              verification
            </p>
          </Dragger>
          <div className="spinner">
            {loading && <Spin indicator={antIcon} />}
          </div>
        </Card>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  width: 100%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const HeaderTitle = styled.div`
  margin: 64px 0 12px;
`;

async function sha256(file: File): Promise<string> {
  const buffer = await file2Buffer(file);
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

async function file2Buffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    const readFile = () => {
      const buffer = reader.result;
      resolve(buffer as ArrayBuffer);
    };

    reader.addEventListener("load", readFile);
    reader.readAsArrayBuffer(file);
  });
}

export default UploadPage;
