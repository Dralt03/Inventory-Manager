"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";
import Column from "@/components/ui/Inventory/Column";

const Page = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then(async (response) => await response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // const shops = {
  //   id: "1",
  //   title: "Shop1",
  //   items: [
  //     {
  //       id: "1",
  //       shop: "1",
  //       itemName: "Adidas Shoes",
  //       quantity: 1,
  //     },
  //     {
  //       id: "2",
  //       shop: "1",
  //       itemName: "Big Joe",
  //       quantity: 4,
  //     },
  //   ],
  // };
  return (
    <div className="pt-24">
      <p
        className={`${poppins.className} px-16 py-5 text-3xl font-medium w-full bg-white dark:bg-neutral-800`}
      >
        Inventory
      </p>
    </div>
  );
};

export default Page;
