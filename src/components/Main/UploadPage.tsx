import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Spin, Layout, Typography, Upload, Card } from "antd";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";

import { skyblue } from "../colors";
import DemoFile from "./DemoFile";

const { Title, Text } = Typography;
const { Dragger } = Upload;
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: `${skyblue}` }} spin />
);

interface IProps {
  validating: boolean;
  onUploadDone: (hash: string, filename: string) => void;
}

function UploadPage({ validating, onUploadDone }: IProps) {
  const [loading, setLoading] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
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

  const handleDragEnterFile = useCallback((event) => {
    const fileType = event.dataTransfer?.items[0]?.type;
    setInvalidFile(fileType !== "application/pdf");
  }, []);

  const msg = useMemo(() => {
    if (invalidFile) {
      return "Only PDF files are accepted!";
    }
    if (validating) {
      return "Validating...";
    }

    return "Upload a Signed Document Here";
  }, [invalidFile, validating]);

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
        <div
          className={invalidFile ? "invalidFile" : ""}
          onDragEnter={handleDragEnterFile}
        >
          <Card>
            <Dragger
              name="file"
              accept="application/pdf"
              showUploadList
              action=""
              disabled={loading || validating}
              customRequest={handleCustomRequest}
              multiple={false}
              // onChange={handleChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">{msg}</p>
              <p
                className="ant-upload-hint"
                style={{
                  visibility: validating ? "hidden" : "visible",
                }}
              >
                Upload or drop your signed document here in the dropzone for
                verification
              </p>
            </Dragger>
            <div className="spinner">
              <Spin
                indicator={antIcon}
                style={{
                  visibility: loading || validating ? "visible" : "hidden",
                }}
              />
            </div>
          </Card>
        </div>
      </Main>
      <Demo>
        <DemoFile />
      </Demo>
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

  .invalidFile {
    .ant-upload-drag-icon .anticon {
      transition: color 0.3s ease;
      color: red !important;
    }
    .ant-upload.ant-upload-drag {
      transition: background-color 0.3s ease;
      background-color: mistyrose;
    }
  }
`;

const HeaderTitle = styled.div`
  margin: 64px 0 12px;
`;

const Demo = styled.div``;

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
