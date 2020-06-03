import React from "react";

const Container = ({ children, margin, padding }) => {
  return <div className={`container mx-${margin} px-${padding}`}>{children}</div>;
};

export default Container;
