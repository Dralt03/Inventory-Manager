import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="main h-screen w-screen flex justify-center items-center flex-grow">
        <SignIn />;
      </div>
    </>
  );
};

export default page;
