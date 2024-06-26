"use server";

import User from "../models/user.model";
import { AddToDB } from "../db";

export async function createUser(user: any) {
  try {
    const newUser = await User.create(user);
    await AddToDB(newUser);
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log("Error creating User: ", err);
  }
}
