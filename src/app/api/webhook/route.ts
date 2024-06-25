import { createUser } from "@/lib/actions/user.action";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Shop } from "@/components/definitions";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const event = body?.type;
    if (event === "user.created") {
      const { id, email_addresses, username, first_name, last_name } =
        body?.data;

      const shops: Shop | never[] = [];
      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name,
        lastName: last_name,
        shops: shops,
      };
      const newUser = await createUser(user);

      if (newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }

      return NextResponse.json({ message: "New User Created", user: newUser });
    }

    return new NextResponse("Recorded Successfully", { status: 200 });
  } catch (err) {
    console.log("Error in route.ts: ", err);
  }
};
