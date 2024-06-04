"use client";
import React, { useRef, useState } from "react";
import { ModeToggle } from "./theme-toggler";
import Hamburger from "hamburger-react";
import { jetBrains } from "./fonts";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [slides, setSlides] = useState(false);

  const closeSlide = () => {
    setSlides(false);
  };

  return (
    <>
      <header className="min-h-16 z-20 absolute max-md:p-5 w-full py-2 bg-neutral-50 dark:bg-zinc-700">
        <nav className="flex w-full justify-between items-center">
          <div className="flex items-center md:m-3">
            <SignedIn>
              <Hamburger toggled={slides} toggle={setSlides} />
            </SignedIn>
            <p
              className={`${jetBrains.className} md:text-2xl max-md:px-10 hover:cursor-pointer md:pl-10 text-lg font-bold`}
            >
              <SignedIn>
                <Link href={"/overview"}>INVENTORY MANAGER</Link>
              </SignedIn>
              <SignedOut>
                <Link href={"/"}>INVENTORY MANAGER</Link>
              </SignedOut>
            </p>
          </div>
          <div className=" flex items-center md:mx-10">
            <div className="md:mr-5">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <ModeToggle />
          </div>
        </nav>
      </header>
      <div>{slides && <Sidebar />}</div>
    </>
  );
};

export default Navbar;
