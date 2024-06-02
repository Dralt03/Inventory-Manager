"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";
import AddColumn from "@/components/ui/Inventory/AddColumn";
import Column from "@/components/ui/Inventory/Column";

const Page = () => {
  const [shops, setShops] = useState([]);

  interface Shop {
    id: string;
    title: string;
    items: any;
  }
  interface Items {
    id: string;
    shop: string;
    itemName: string;
    quantity: number;
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((res) => setShops(res))
      .catch((err) => console.log("Err fetching: ", err));
  }, []);

  return (
    <div className="pt-24 overflow-auto">
      <p className={`${poppins.className} px-16 py-5 text-3xl font-medium `}>
        Inventory
      </p>
      <div className="flex flex-col max-md:items-center md:flex-row">
        {shops.length > 0
          ? shops.map((item: Shop) => {
              return <Column key={item.id} {...item} />;
            })
          : "Loading"}
        <AddColumn />
      </div>
    </div>
  );
};

export default Page;
