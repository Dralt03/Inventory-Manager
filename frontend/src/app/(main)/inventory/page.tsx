"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";

async function FetchData() {}

const Page = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then(async (response) => await response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const [message, setMessage] = useState("");
  return (
    <div className="pt-36">
      <p
        className={`${poppins.className} px-16 py-5 text-3xl font-medium w-full bg-white dark:bg-neutral-800`}
      >
        Inventory{" "}
      </p>
    </div>
  );
};

export default Page;
