import React from "react";
import { Shop } from "../definitions";
import { poppins } from "../fonts";

const OverviewCard = (details: Shop) => {
  return (
    <div
      className={`${poppins.className} basis-1/12 mt-20 w-1/3 flex-grow mx-10 flex flex-col max-md:w-1/2 px-8 py-5 rounded-xl bg-neutral-300/80 dark:bg-zinc-700/80`}
    >
      <p className="text-xl max-md:text-center">{details.title}</p>
      <p className="text-6xl pt-5 max-md:text-center md:text-right">
        {details.items.length}
      </p>
    </div>
  );
};

export default OverviewCard;
