"use client";
import React, { useEffect, useState } from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { CardDetails } from "@/components/definitions";
import { OverviewItems } from "@/lib/seed";

const Page = () => {
  const [OverviewItems, setOverviewItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((res) => setOverviewItems(res));
  }, []);
  console.log(OverviewItems);

  return (
    <main className="flex max-md:justify-center">
      <div className="pt-10 pl-10 flex flex-wrap max-md:min-w-80 w-full">
        {OverviewItems.length > 0
          ? OverviewItems.map((shop: any) => {
              return <OverviewCard key={shop.shopName} {...shop} />;
            })
          : "Nothing to see here"}
      </div>
    </main>
  );
};

export default Page;
