import React from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { title } from "process";
import { OverviewItems } from "@/lib/seed";

const page = () => {
  return (
    <main className="flex max-md:justify-center">
      <div className="pt-10 pl-10 flex flex-wrap max-md:min-w-80 w-full">
        {OverviewItems.map((shops) => {
          return <OverviewCard key={shops.shopName} {...shops} />;
        })}
      </div>
    </main>
  );
};

export default page;
