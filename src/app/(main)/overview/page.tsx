import React from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { title } from "process";
import { OverviewItems } from "@/lib/seed";

const page = () => {
  return (
    <main className="flex  md:justify-center">
      <div className="pt-10 pl-16 flex flex-wrap max-md:min-w-96 w-2/3">
        {OverviewItems.map((shops) => {
          return <OverviewCard key={shops.shopName} {...shops} />;
        })}
      </div>
    </main>
  );
};

export default page;
