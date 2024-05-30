import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <div className="main h-screen w-screen">{children}</div>
    </>
  );
};

export default layout;
