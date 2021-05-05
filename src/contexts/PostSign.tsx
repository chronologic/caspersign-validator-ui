import React, { createContext, useState } from "react";

export interface IPostSign {
  show: React.ReactNode;
  setShow: (show: boolean) => void;
}

interface IProps {
  children: React.ReactNode;
}

export const PostSignContext = createContext<IPostSign>({
  show: false,
  setShow: () => {},
});

export const PostSignProvider: React.FC<IProps> = ({ children }: IProps) => {
  const [show, setShow] = useState(false);

  return (
    <PostSignContext.Provider value={{ show, setShow }}>
      {children}
    </PostSignContext.Provider>
  );
};
