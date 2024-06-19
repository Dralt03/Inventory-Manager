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
    <div className="z-10 absolute w-64 backdrop-blur-xl drop-shadow-2xl overflow-hidden pt-28 px-0 pb-12 items-stretch flex flex-col justify-start bg-neutral-100/50 h-screen dark:bg-zinc-700/50">
      <SignedIn>
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <div
                className={clsx("py-5 px-5 text-xl hover:cursor-pointer  ", {
                  "bg-neutral-100 dark:bg-neutral-800": pathname === link.href,
                })}
              >
                {link.name}
              </div>
            </Link>
          );
        })}
      </SignedIn>
    </div>
  );
};

export default Sidebar;
