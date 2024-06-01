import React from "react";
import { Shop, Item } from "@/components/definitions";

const Column = (column: Shop) => {
  return (
    <div className="min-h-96 h-fit w-72 max-sm:w-52 rounded-2xl mx-10 my-10 px-5 py-10 flex flex-col justify-start dark:bg-zinc-700">
      <p className="text-3xl ">{column.title}</p>
      <ul>
        {column.items.map((item: Item) => {
          return (
            <li className="px-8 mt-10" key={item.id}>
              {item.itemName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Column;
