import { createGlobalStyle } from "styled-components";

// import { skyblue } from "../colors";

const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  .ant-layout {
    background: #F8F9FA;
  }
  .ant-layout-header {
    background: #F8F9FA;
  }
  .ant-layout-footer {
    padding: 0 24px 50px;
    background: #F8F9FA;
  } 
  .ant-card-bordered {
    margin-bottom: 20px;
  }
  .tag-icon {
    width: 12px;
    margin-right: 5px;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0;
  }
`;

export default Style;
