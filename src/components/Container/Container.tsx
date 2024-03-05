"use client";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container-div">{children}</div>;
};

export default Container;
