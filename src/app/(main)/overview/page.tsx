"use client";
import React, { useEffect, useState } from "react";
import OverviewCard from "@/components/ui/overviewCard";
import { Shop } from "@/components/definitions";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const [items, setItems] = useState<Shop[]>();
  const { isSignedIn, user, isLoaded } = useUser();

  const userId = user?.id;
  const setData = async () => {
    if (!user?.id) {
      return;
    }
    try {
      await fetch(
        `https://inventory-manager-backend-qkxh.onrender.com/api/users/${userId}/shops`
      )
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        });
    } catch (err) {
      console.log("Error setting items: ", err);
    }
  };

  useEffect(() => {
    setData();
  }, [isLoaded]);

  return (
    <main className="flex max-md:justify-center">
      <div className="pt-10 pl-10 flex flex-wrap max-md:min-w-80 w-full">
        {items !== null
          ? items?.map((shop: Shop) => {
              return <OverviewCard key={shop.id} {...shop} />;
            })
          : ""}
      </div>
    </main>
  );
};

export default Page;
