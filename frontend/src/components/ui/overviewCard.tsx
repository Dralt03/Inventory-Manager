import React from "react";
import { CardDetails } from "../definitions";

const OverviewCard = (details: CardDetails) => {
  return (
    <div className="mt-20 flex flex-col max-md:w-1/2 px-8 py-5 h-32 w-80 rounded-xl bg-zinc-700">
      <p>{details.shopName}</p>
      <p>{details.items}</p>
    </div>
  );
};

export default OverviewCard;
