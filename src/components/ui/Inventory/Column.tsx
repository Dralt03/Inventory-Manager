import React from "react";
import { Shop } from "@/components/definitions";
import { Separator } from "../separator";
import { Plus } from "lucide-react";

const Column = (column: Shop) => {
  return (
    <div className="min-h-96 flex-shrink-0 h-fit w-72 max-sm:mx-5 rounded-2xl mx-10 my-10 px-5 py-10 flex flex-col justify-start bg-white dark:bg-zinc-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <p className="text-3xl ">{column.title}</p>
      <Separator />
      <ul className="pt-8">
        {column.items.map((item: any) => {
          return (
            <li className="px-4 py-3 text-lg" key={item.id}>
              {item.itemName}
              <p className="text-neutral-400 py-3 text-sm">
                Quantity:{item.quantity}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="text-neutral-400 flex items-center px-4 text-sm hover:text-neutral-500 cursor-pointer">
        Add Item <Plus size={15} />
      </p>
    </div>
  );
};

export default Column;
