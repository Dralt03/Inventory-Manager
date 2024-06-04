"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";
import AddColumn from "@/components/ui/Inventory/AddColumn";
import Column from "@/components/ui/Inventory/Column";
import { shops } from "@/lib/seed";
import { Shop, Item } from "@/components/definitions";

const Page = () => {
  const [items, setItems] = useState(shops);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(savedItems);
  }, []);

  const addNewItem = (
    shop_id: string,
    itemName: string,
    shop: string,
    quantity: number
  ) => {
    const newItem: Item = {
      id: Math.random().toString(),
      itemName: itemName,
      quantity: quantity,
      shop: shop,
    };

    items.map((shops) =>
      shops.id === shop_id ? { ...shops, items: [...items, newItem] } : shops
    );
    console.log(items);
  };

  const addEmptyShop = () => {
    const newShop: Shop = {
      id: Math.random().toString(),
      title: "NewShop",
      items: [],
    };
    setItems((prevItems) => [...prevItems, newShop]);
  };

  const changeShopTitle = (id: string, newTitle: string) => {
    setItems((previtems) =>
      previtems.map((shop) =>
        shop.id === id ? { ...shop, title: newTitle } : shop
      )
    );
    saveItemsToLocalStorage(
      items.map((shop) =>
        shop.id === id ? { ...shop, title: newTitle } : shop
      )
    );
  };

  const deleteShop = (id: string) => {
    setItems((previtems) => previtems.filter((item) => item.id !== id));
    saveItemsToLocalStorage(items.filter((shop) => shop.id !== id));
  };

  const saveItemsToLocalStorage = (shops: Shop[]) => {
    localStorage.setItem("items", JSON.stringify(shops));
  };

  return (
    <div className="pt-24 mr-5 overflow-auto">
      <div
        className={`${poppins.className} px-16 pt-5 pb-4 text-3xl font-medium `}
      >
        Inventory
      </div>
      <div className="flex flex-col max-md:items-center md:flex-row">
        {items.length > 0
          ? items.map((item: Shop) => {
              return (
                <Column
                  key={item.id}
                  column={item}
                  handleChangeTitle={changeShopTitle}
                  deleteShop={deleteShop}
                  addShopItem={addNewItem}
                />
              );
            })
          : ""}
        <AddColumn shops={items} addEmptyShop={addEmptyShop} />
      </div>
    </div>
  );
};

export default Page;
