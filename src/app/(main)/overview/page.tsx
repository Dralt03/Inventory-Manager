"use client";
import React, { useEffect, useState } from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { CardDetails } from "@/components/definitions";
import { OverviewItems, shops } from "@/lib/seed";

const Page = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFromLocalStorage = () => {
      try {
        const shopsData = localStorage.getItem("shops");
        console.log(shopsData);
        if (shopsData) {
          const parsedShops = JSON.parse(shopsData);
          setShops(parsedShops);
        }
      } catch (err) {
        console.log("Error fetching: ", err);
        throw err;
      }
    };

    fetchFromLocalStorage();
  }, []);

  return (
    <main className="flex max-md:justify-center">
      <div className="pt-10 pl-10 flex flex-wrap max-md:min-w-80 w-full">
        {shops.length > 0
          ? shops.map((shop: any) => {
              return <OverviewCard key={shop.id} {...shop} />;
            })
          : "Nothing to see here"}
      </div>
    </main>
  );
};

export default Page;
