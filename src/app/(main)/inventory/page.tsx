import React from "react";
import { poppins } from "@/components/fonts";

const page = () => {
  return (
    <div className="pt-36">
      <p
        className={`${poppins.className} px-16 py-5 text-3xl font-medium w-full bg-white dark:bg-neutral-800`}
      >
        Inventory{" "}
      </p>
    </div>
  );
};

export default page;
