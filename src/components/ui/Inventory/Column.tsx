"use client";
import React, { useState } from "react";
import { Shop } from "@/components/definitions";
import { Separator } from "../separator";
import { Edit, Trash, Trash2Icon } from "lucide-react";
import AddSheet from "./AddSheet";
import clsx from "clsx";

const Column: React.FC<{
  column: Shop;
  handleChangeTitle: (id: string, newTitle: string) => void;
  deleteShop: (id: string) => void;
  deleteElement: (shop_id: string, item_id: string) => void;
  addShopItem: (shop_id: string, itemName: string, quantity: number) => void;
}> = ({
  column,
  handleChangeTitle,
  deleteShop,
  addShopItem,
  deleteElement,
}) => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() === "") {
      return;
    }
    handleChangeTitle(column.id, title);
    setTitle("");
    setEditTitle(false);
  };

  return (
    <div className="min-h-96 flex-shrink-0 h-fit w-72 max-sm:mx-5 rounded-2xl mx-10 my-10 px-5 py-10 flex flex-col justify-start bg-white dark:bg-zinc-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div className="text-3xl ">
        {editTitle ? (
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              className="w-full focus:outline-none rounded-xl p-2 text-xl bg-neutral-100 dark:bg-zinc-500/60"
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </form>
        ) : (
          <div className="flex items-center justify-between">
            {column.title}
            <div className="flex">
              <Edit
                className="cursor-pointer mr-5"
                onClick={() => setEditTitle(true)}
                size={20}
              />

              <Trash
                className="cursor-pointer"
                onClick={() => deleteShop(column.id)}
                size={20}
              />
            </div>
          </div>
        )}
      </div>
      <Separator />
      <ul className="pt-8">
        {column.items.map((item: any) => {
          return (
            <div key={item.id}>
              <li
                className={clsx(
                  "px-4 py-3 text-lg flex items-center justify-between",
                  {
                    "text-red-600/60 dark:text-red-400 font-semibold":
                      item.quantity <= 0,
                  }
                )}
              >
                {item.itemName}
                <Trash2Icon
                  className="hover:cursor-pointer"
                  onClick={() => {
                    deleteElement(column.id, item.id);
                    console.log(item);
                  }}
                  size={18}
                />
              </li>
              <p className="text-neutral-400 pb-4 pl-4 text-sm">
                Quantity:{item.quantity}
              </p>
            </div>
          );
        })}
      </ul>
      <AddSheet
        shop_id={column.id}
        shop_name={column.title}
        addShopItem={addShopItem}
      />
    </div>
  );
};

export default Column;
