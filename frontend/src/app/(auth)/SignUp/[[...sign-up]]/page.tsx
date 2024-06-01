import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="main h-screen w-screen flex justify-center items-center flex-grow">
        <SignUp />;
      </div>
    </>
  );
};

export default page;
