import React from "react";
import styled from "styled-components";
import { Layout, Typography, Upload, Card, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Dragger } = Upload;

const handleChange = (info: {
  file: { name?: any; status?: any };
  fileList: any;
}) => {
  const { status } = info.file;
  if (status !== "uploading") {
    console.log(info.file);
  }
  if (status === "Done") {
    message.success(`${info.file.name} uploaded successfully.`);
  } else if (status === "Error") {
    message.error(`${info.file.name} upload failed.`);
  }
};

function UploadPage() {
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
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={handleChange}
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

export default UploadPage;
