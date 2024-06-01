"use client";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="-z-10absolute w-52 overflow-hidden pt-28 px-0 pb-12 items-stretch flex flex-col justify-end bg-neutral-200 h-screen dark:bg-zinc-600/80">
      <SignedIn>
        <Link href={"/overview"}>
          <div className="py-5 px-5 text-xl hover:cursor-pointer bg-neutral-600/20 dark:bg-neutral-800">
            Overview
          </div>
        </Link>
        <Link href={"/inventory"}>
          <div className="py-5 px-5 text-xl hover:cursor-pointer ">
            Inventory
          </div>
        </Link>
        {/* <div className="py-5 px-5 text-xl hover:cursor-pointer ">
        <Link href={"/chat"}>Chat</Link>
      </div> */}
      </SignedIn>
      <SignedOut>
        <Link href={"/SignIn"}>
          <div className="py-5 px-5 text-xl hover:cursor-pointer ">Sign In</div>
        </Link>
        <Link href={"/SignUp"}>
          <div className="py-5 px-5 text-xl hover:cursor-pointer ">Sign Up</div>
        </Link>
      </SignedOut>
    </div>
  );
};

export default Sidebar;
