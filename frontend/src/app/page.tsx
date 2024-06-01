"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { jetBrains, poppins } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className={`${poppins.className} h-screen w-full`}>
      <Navbar />
      <section className="main pt-52 max-sm:pt-96 h-full w-full flex flex-col justify-center items-center text-zinc-900 dark:text-white">
        <div className="absolute top-64 h-56 w-full animate-[pulse_3s_linear_infinity] bg-gradient-to-r from-violet-700/40 to-blue-400/40 rounded-full blur-3xl"></div>
        <div className=" z-10 text-7xl absolte max-sm:text-4xl font-bold">
          <p>Manage Your</p>
        </div>
        <div
          className={`${jetBrains.className} z-20 pt-9 flex flex-col items-center text-center text-7xl max-sm:text-4xl font-black`}
        >
          <p className="relative">Inventory Space</p>
          <p className="mt-16 text-lg font-normal ">
            Manage Your{" "}
            <Typewriter
              words={["Finances", "Inventory", "Shops"]}
              loop
              delaySpeed={2000}
            />
          </p>
          <p className="text-lg font-thin md:px-28 px-10 max-w-1/2 py-10 text-center my-5 bg-white/20 dark:bg-transparent">
            With the all new Inventory Manager it has never been easier to keep
            track of all your expenses items in storage
          </p>
        </div>

        <div className="relative flex w-1/2 items-center justify-evenly py-20 flex-col md:flex-row">
          <Button className="max-md:mb-10" variant="outline">
            <Link href={"/SignIn"}>Sign In</Link>
          </Button>
          <Button>
            <Link href={"/SignUp"}>Get Started</Link>
          </Button>
        </div>
      </section>
      <section className="main h-28 w-screen"></section>
    </main>
  );
}
