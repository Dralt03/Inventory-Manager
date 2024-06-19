import { currentUser } from "@clerk/nextjs/server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async () => {
  try {
    const reponse = await fetch(
      "http://localhost:8080/api/users/user_2hpNSf76I42zqwa4sBZInQmJPT3/shops"
    );
    const data = await reponse.json();
    return data;
  } catch (err) {
    console.log("Error fetching: ", err);
  }
};
