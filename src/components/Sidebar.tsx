"use client";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "Overview",
      href: "/overview",
    },
    {
      name: "Inventory",
      href: "/inventory",
    },
  ];
  return (
    <div className="-z-10absolute w-52 overflow-hidden pt-28 px-0 pb-12 items-stretch flex flex-col justify-end bg-neutral-200 h-screen dark:bg-zinc-600/80">
      <SignedIn>
        {links.map((link) => {
          return (
            <Link href={link.href}>
              <div
                className={clsx(
                  "py-5 px-5 text-xl hover:cursor-pointer bg-neutral-600/20 ",
                  {
                    "dark:bg-neutral-800": pathname === link.href,
                  }
                )}
              >
                {link.name}
              </div>
            </Link>
          );
        })}
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
