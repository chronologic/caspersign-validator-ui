import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import { PostSignContext } from "../../contexts";

function PostSignBanner() {
  const { show, setShow } = useContext(PostSignContext);

  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return show ? (
    <Banner>
      <div />
      <span>
        Congratulations, you just signed the document on the blockchain! You can
        see the details of the document and all signatures below.
      </span>
      <CloseOutlined className="close" onClick={handleClose} />
    </Banner>
  ) : null;
}

const Banner = styled.div`
  width: 100%;
  padding: 8px 16px;
  font-weight: bold;
  background-color: #5cc728;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .close {
    color: black;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-left: 8px;
    &:hover {
      color: gray;
    }
  }
`;

export default PostSignBanner;
