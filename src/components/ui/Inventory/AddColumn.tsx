import React from "react";
import { Plus } from "lucide-react";
import { Shop } from "@/components/definitions";

const AddColumn: React.FC<{ shops: Shop[]; addEmptyShop: () => void }> = ({
  shops,
  addEmptyShop,
}) => {
  console.log(shops);
  return (
    <div
      onClick={addEmptyShop}
      className="min-h-96 cursor-pointer h-fit min-w-72 max-sm:w-52 rounded-2xl mx-10 my-10 px-5 py-10 flex justify-center items-center bg-white dark:bg-zinc-700/90 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
    >
      <Plus size={80} />
    </div>
  );
};

export default AddColumn;
