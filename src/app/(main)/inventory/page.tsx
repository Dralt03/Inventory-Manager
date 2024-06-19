"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/components/fonts";
import AddColumn from "@/components/ui/Inventory/AddColumn";
import Column from "@/components/ui/Inventory/Column";
import { Shop, Item } from "@/components/definitions";
import { useUser } from "@clerk/nextjs";
import { fetchData } from "@/lib/utils";

const Page = () => {
  const [items, setItems] = useState<Shop[]>();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const setData = async () => {
      try {
        const fetchedData = await fetchData();
        setItems(fetchedData);
      } catch (err) {
        console.log("Error setting items: ", err);
      }
    };

    setData();
  }, []);

  const userId = user?.id;
  console.log(userId);
  const addNewItem = async (
    shop_id: string,
    itemName: string,
    quantity: number
  ) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${userId}/shops/${shop_id}/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemName, quantity }),
        }
      );
      if (response.ok) {
        const newItem = await response.json();
        setItems(
          items?.map((shop) =>
            shop.id === shop_id
              ? { ...shop, items: [...shop.items, newItem] }
              : shop
          )
        );
      } else {
        const errData = await response.json();
        console.log("Error repose: ", errData.message);
      }
    } catch (err) {
      console.log("Error adding element: ", err);
    }
  };

  const deleteElement = async (shop_id: string, item_id: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/shops/${shop_id}/items/${item_id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setItems(
          items?.map((shop) =>
            shop.id === shop_id
              ? {
                  ...shop,
                  items: shop.items.filter(
                    (thing: Item) => thing.id !== item_id
                  ),
                }
              : shop
          )
        );
      } else {
        const errData = await response.json();
        console.log("Error deleting: ", errData.message);
      }
    } catch (err) {
      console.log("Error Deleting element: ", err);
    }
  };

  const addEmptyShop = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/user/${userId}/shops`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: "NewShop" }),
        }
      );

      if (response.ok) {
        const addedShop = await response.json();
        setItems((prevItems) => [{ ...prevItems }, addedShop]);
      } else {
        const errData = await response.json();
        console.log("Error Adding Shop: ", errData.message);
      }
    } catch (err) {
      console.log("Cannot post: ", err);
    }
  };

  const changeShopTitle = async (id: string, newTitle: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/shops/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle }),
      });

      if (response.ok) {
        const updatedShop = await response.json();
        setItems((previtems) =>
          previtems?.map((shop) => (shop.id === id ? updatedShop : shop))
        );
      } else {
        const errData = await response.json();
        console.log("Error in response: ", errData.message);
      }
    } catch (err) {
      console.log("Error Changing Name: ", err);
    }
  };

  const deleteShop = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/shops/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setItems((previtems) => previtems?.filter((item) => item.id !== id));
      } else {
        const errorData = await response.json();
        console.log("Error deleting shop: ", errorData.message);
      }
    } catch (err) {
      console.log("Error POSTING: ", err);
    }
  };

  return (
    <div className="pt-24 mr-5 overflow-auto">
      <div
        className={`${poppins.className} px-16 pt-5 pb-4 text-3xl font-medium `}
      >
        Inventory
      </div>
      <div className="flex flex-col max-md:items-center md:flex-row">
        {items?.map((item: Shop) => {
          return (
            <Column
              key={item.id}
              column={item}
              handleChangeTitle={changeShopTitle}
              deleteShop={deleteShop}
              addShopItem={addNewItem}
              deleteElement={deleteElement}
            />
          );
        })}
        <AddColumn
          shops={items ? [...items] : []}
          addEmptyShop={addEmptyShop}
        />
      </div>
    </div>
  );
};

export default Page;
