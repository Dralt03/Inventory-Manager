import React from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { title } from "process";

const page = () => {
  const shops = {
    shopName: "Shop1",
    items: 20,
  };
  return (
    <div className="pt-10 pl-16">
      <OverviewCard {...shops} />
    </div>
  );
};

export default page;
