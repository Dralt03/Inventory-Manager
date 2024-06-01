"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";
import Column from "@/components/ui/Inventory/Column";
import AddColumn from "@/components/ui/Inventory/AddColumn";
import { shops } from "@/lib/seed";

const Page = () => {
  return (
    <div className="pt-24 overflow-auto">
      <p className={`${poppins.className} px-16 py-5 text-3xl font-medium `}>
        Inventory
      </p>
      <div className="flex flex-col max-md:items-center md:flex-row">
        {shops.map((shop) => {
          return <Column key={shop.id} {...shop} />;
        })}
        <AddColumn />
      </div>
    </div>
  );
};

export default Page;
