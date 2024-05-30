"use client";
import React from "react";

const Sidebar = () => {
  return (
    <div className="-z-10absolute w-52 overflow-hidden pt-28 px-0 items-stretch flex flex-col bg-neutral-200 h-screen dark:bg-zinc-600/80">
      <div className="py-5 px-5 text-xl hover:cursor-pointer bg-neutral-600/20 dark:bg-neutral-800">
        Overview
      </div>
      <div className="py-5 px-5 text-xl hover:cursor-pointer ">Inventory</div>
      <div className="py-5 px-5 text-xl hover:cursor-pointer ">Chat</div>
    </div>
  );
};

export default Sidebar;
