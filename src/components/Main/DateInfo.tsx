import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

function DateInfo() {
  return (
    <Content>
      <Text className="dateInfo">
        All dates on this page are shown in your local timezone ({tz}).
      </Text>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;

  .dateInfo {
    font-style: italic;
    color: darkgray;
  }
`;

export default DateInfo;
